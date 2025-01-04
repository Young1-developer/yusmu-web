import React, {useState} from 'react'
import './SetQuiz.css'



const SetQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [newQuiz, setNewQuiz] = useState({
      title: '',
      description: '',
      timeLimit: '',
      expiryDate: '',
      tags: '',
      questions: [{
        question: '',
        options: {
          a: '',
          b: '',
          c: '',
          d: ''
        },
        correctAnswer: 'a'
      }]
    });
    const validateQuiz = () => {
      const errors = {};
      if (!newQuiz.title.trim()) errors.title = 'Title is required';
      if (!newQuiz.description.trim()) errors.description = 'Description is required';
      if (!newQuiz.timeLimit) errors.timeLimit = 'Time limit is required';
      if (!newQuiz.expiryDate) errors.expiryDate = 'Expiry date is required';
      newQuiz.questions.forEach((q, i) => {
        if (!q.question.trim()) errors[`question_${i}`] = 'Question is required';
        Object.entries(q.options).forEach(([key, value]) => {
          if (!value.trim()) errors[`option_${i}_${key}`] = 'Option is required';
        });
      });
      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
    };
    const handlePreview = () => {
      if (validateQuiz()) {
        setShowPreview(true);
      }
    };
    const handleQuestionChange = (index, field, value) => {
      const updatedQuestions = [...newQuiz.questions];
      if (field.startsWith('option')) {
        const option = field.split('_')[1];
        updatedQuestions[index].options[option] = value;
      } else if (field === 'correctAnswer') {
        updatedQuestions[index].correctAnswer = value;
      } else {
        updatedQuestions[index][field] = value;
      }
      setNewQuiz({
        ...newQuiz,
        questions: updatedQuestions
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      if (validateQuiz()) {
        setQuizzes([...quizzes, {
          ...newQuiz,
          id: Date.now(),
          status: 'available',
          tags: newQuiz.tags.split(',').map(tag => tag.trim())
        }]);
        setNewQuiz({
          title: '',
          description: '',
          timeLimit: '',
          expiryDate: '',
          tags: '',
          questions: [{
            question: '',
            options: {
              a: '',
              b: '',
              c: '',
              d: ''
            },
            correctAnswer: 'a'
          }]
        });
        setValidationErrors({});
      }
    };
    const handleAddQuestion = () => {
      setNewQuiz({
        ...newQuiz,
        questions: [...newQuiz.questions, {
          question: '',
          options: {
            a: '',
            b: '',
            c: '',
            d: ''
          },
          correctAnswer: 'a'
        }]
      });
    };
    const filteredQuizzes = quizzes.filter(quiz => quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    const deleteQuiz = id => {
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
    };
    return <div className="container py-4">
      <h2 className="mb-4">Create New Quiz</h2>
  
      {showPreview && <div className="quiz-preview-modal" onClick={() => setShowPreview(false)}>
          <div className="quiz-preview-content" onClick={e => e.stopPropagation()}>
            <h3>{newQuiz.title}</h3>
            <p>{newQuiz.description}</p>
            <p>Time Limit: {newQuiz.timeLimit} minutes</p>
            <p>Expiry Date: {newQuiz.expiryDate}</p>
            <div className="questions">
              {newQuiz.questions.map((q, i) => <div key={i} className="mb-4">
                  <h5>Question {i + 1}: {q.question}</h5>
                  {Object.entries(q.options).map(([key, value]) => <div key={key} className={`option-row ${q.correctAnswer === key ? 'bg-success text-white' : ''}`}>
                      {key.toUpperCase()}: {value}
                    </div>)}
                </div>)}
            </div>
            <button className="btn btn-secondary" onClick={() => setShowPreview(false)}>Close Preview</button>
          </div>
        </div>}
  
      <form onSubmit={handleSubmit}>
        <div className="card mb-4">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Quiz Title</label>
              <input type="text" className={`form-control ${validationErrors.title ? 'is-invalid' : ''}`} value={newQuiz.title} onChange={e => setNewQuiz({
                ...newQuiz,
                title: e.target.value
              })} />
              {validationErrors.title && <div className="validation-error">{validationErrors.title}</div>}
            </div>
  
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className={`form-control ${validationErrors.description ? 'is-invalid' : ''}`} value={newQuiz.description} onChange={e => setNewQuiz({
                ...newQuiz,
                description: e.target.value
              })} />
              {validationErrors.description && <div className="validation-error">{validationErrors.description}</div>}
            </div>
  
            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Time Limit (minutes)</label>
                <input type="number" className={`form-control ${validationErrors.timeLimit ? 'is-invalid' : ''}`} value={newQuiz.timeLimit} onChange={e => setNewQuiz({
                  ...newQuiz,
                  timeLimit: e.target.value
                })} />
                {validationErrors.timeLimit && <div className="validation-error">{validationErrors.timeLimit}</div>}
              </div>
              <div className="col-md-4">
                <label className="form-label">Expiry Date</label>
                <input type="date" className={`form-control ${validationErrors.expiryDate ? 'is-invalid' : ''}`} value={newQuiz.expiryDate} onChange={e => setNewQuiz({
                  ...newQuiz,
                  expiryDate: e.target.value
                })} />
                {validationErrors.expiryDate && <div className="validation-error">{validationErrors.expiryDate}</div>}
              </div>
              <div className="col-md-4">
                <label className="form-label">Tags (comma-separated)</label>
                <input type="text" className="form-control" value={newQuiz.tags} onChange={e => setNewQuiz({
                  ...newQuiz,
                  tags: e.target.value
                })} placeholder="math, algebra, etc" />
              </div>
            </div>
  
            <h4 className="mt-4 mb-3">Questions</h4>
            {newQuiz.questions.map((question, qIndex) => <div key={qIndex} className="card mb-3">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Question {qIndex + 1}</label>
                    <input type="text" className={`form-control ${validationErrors[`question_${qIndex}`] ? 'is-invalid' : ''}`} value={question.question} onChange={e => handleQuestionChange(qIndex, 'question', e.target.value)} required />
                    {validationErrors[`question_${qIndex}`] && <div className="validation-error">{validationErrors[`question_${qIndex}`]}</div>}
                  </div>
  
                  {Object.keys(question.options).map(option => <div key={option} className="mb-2 option-row">
                      <label className="form-label">Option {option.toUpperCase()}</label>
                      <input type="text" className={`form-control ${validationErrors[`option_${qIndex}_${option}`] ? 'is-invalid' : ''}`} value={question.options[option]} onChange={e => handleQuestionChange(qIndex, `option_${option}`, e.target.value)} required />
                      {validationErrors[`option_${qIndex}_${option}`] && <div className="validation-error">{validationErrors[`option_${qIndex}_${option}`]}</div>}
                    </div>)}
  
                  <div className="mb-3">
                    <label className="form-label">Correct Answer</label>
                    <select className="form-select" value={question.correctAnswer} onChange={e => handleQuestionChange(qIndex, 'correctAnswer', e.target.value)}>
                      <option value="a">Option A</option>
                      <option value="b">Option B</option>
                      <option value="c">Option C</option>
                      <option value="d">Option D</option>
                    </select>
                  </div>
                </div>
              </div>)}
  
            <button type="button" className="btn btn-secondary mb-3" onClick={handleAddQuestion}>
              Add Question
            </button>
          </div>
        </div>
  
        <div className="mt-3">
          <button type="submit" className="btn btn-primary me-2">Create Quiz</button>
          <button type="button" className="btn btn-info" onClick={handlePreview}>Preview Quiz</button>
        </div>
      </form>
  
      <div className="quiz-search">
        <input type="text" className="form-control" placeholder="Search quizzes by title or tags..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>
  
      <h3 className="mt-5 mb-4">Existing Quizzes</h3>
      {filteredQuizzes.map(quiz => <div key={quiz.id} className="card quiz-card mb-3">
          <div className="card-body">
            <span className={`badge ${quiz.status === 'available' ? 'bg-success' : 'bg-danger'} quiz-status`}>
              {quiz.status === 'available' ? 'Available' : 'Expired'}
            </span>
            <h5 className="card-title">{quiz.title}</h5>
            <p className="card-text">{quiz.description}</p>
            <p className="card-text">
              <small className="text-muted">
                Time Limit: {quiz.timeLimit} minutes | Expires: {quiz.expiryDate}
              </small>
            </p>
            <div className="mt-2">
              {quiz.tags.map((tag, i) => <span key={i} className="badge bg-secondary me-1">{tag}</span>)}
            </div>
            <div className="mt-3">
              <button className="btn btn-danger btn-sm" onClick={() => deleteQuiz(quiz.id)}>
                🗑️ Delete Quiz
              </button>
            </div>
          </div>
        </div>)}
    </div>;
  }

  export default SetQuiz