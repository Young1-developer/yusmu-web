import React,{useState} from 'react'

const Dashboard = () => {
      
// Dashboard Component (previously defined)
  const [stats, setStats] = useState({
    courses: 12,
    students: 156,
    quizzes: 34
  });
  
  return (
    <div className="container py-4">
      <h2>Dashboard Overview</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card stats-card courses mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Courses</h5>
              <h2>{stats.courses}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card stats-card students mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <h2>{stats.students}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card stats-card quizzes mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Quizzes</h5>
              <h2>{stats.quizzes}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 

export default Dashboard