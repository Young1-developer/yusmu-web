import React, { useState, useEffect, useCallback } from "react";
import { Navigate } from "react-router-dom";

const quizData = [
  { question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
  { question: "What hook is used for state management?", options: ["useState", "useEffect", "useMemo", "useRef"], answer: "useState" },
  { question: "What does JSX stand for?", options: ["Java Syntax XML", "JavaScript XML", "JSON XML", "Java XML"], answer: "JavaScript XML" },
];

const initialTime = 60; // 60 seconds (1 minute)

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [submitted, setSubmitted] = useState(false);
  
  // Submit quiz when user clicks submit
  const handleSubmit = useCallback(() => {
    fetch("https://your-database-api.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Quiz submitted successfully!");
        setTimeLeft(0); // Reset timer to zero after submission
        setSubmitted(true); // Set submitted to true
      })
      .catch(() => {
        alert("Submission failed!");
        setTimeLeft(0); // Reset timer to zero after submission
        setSubmitted(true); // Set submitted to true
      })
  }, [answers]);

  // Countdown Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleSubmit]);

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Save selected answer
  const handleOptionChange = (event) => {
    setAnswers({ ...answers, [currentQuestion]: event.target.value });
  };

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Move to previous question
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Redirect user to quiz page after submission
  if (submitted) {
    return <Navigate to=".." />;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card p-4 shadow">
        {/* Timer Display */}
        <h5 className="text-danger text-end">Time Left: {formatTime(timeLeft)}</h5>

        <h4 className="mb-3">{quizData[currentQuestion].question}</h4>
        {quizData[currentQuestion].options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              name="quiz"
              value={option}
              className="form-check-input"
              checked={answers[currentQuestion] === option}
              onChange={handleOptionChange}
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary" onClick={prevQuestion} disabled={currentQuestion === 0}>
            Previous
          </button>
          {currentQuestion === quizData.length - 1 ? (
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
          ) : (
            <button className="btn btn-primary" onClick={nextQuestion}>Next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizApp;

/**
 * PRECAUTIONS BEFORE STARTING THE QUIZ:
 * 1. Ensure the user has read the quiz instructions.
 * 2. Prevent the quiz from starting automatically—provide a "Start Quiz" button.
 * 3. Once started, disable refreshing the page to avoid losing progress.
 * 4. Warn users that once they submit, they cannot retake the quiz.
 * 5. Implement a confirmation dialog before submission.
 */
