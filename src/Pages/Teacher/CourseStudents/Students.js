import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Students.css'


const Students = () => {
    const [students, setStudents] = useState([{
      id: 1,
      name: "Alice Johnson",
      email: "alice.j@yusmu.edu",
      avatar: "https://images.websim.ai/avatar/alice",
      courses: ["CS101", "CS201"],
      grade: "A",
      status: "Active"
    }, {
      id: 2,
      name: "Bob Smith",
      email: "bob.s@yusmu.edu",
      avatar: "https://images.websim.ai/avatar/bob",
      courses: ["CS101"],
      grade: "B+",
      status: "Active"
    }]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.email.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div className="container py-4">
        <h2>My Students</h2>
  
        <div className="mb-4">
          <input type="text" className="form-control" placeholder="Search students by name or email..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
  
        <div className="table-responsive">
          <table className="table student-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Courses</th>
                <th>Grade</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => <tr key={student.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={student.avatar} alt={student.name} className="student-avatar me-3" />
                      <div>
                        <div className="student-name">{student.name}</div>
                        <div className="student-email">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{student.courses.join(", ")}</td>
                  <td>{student.grade}</td>
                  <td>
                    <span className={`badge ${student.status === 'Active' ? 'bg-success' : 'bg-warning'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <div className="student-actions">
                      <Link to={`/students/${student.id}/projects`} className="btn btn-sm btn-info">
                        📂 Projects
                      </Link>
                      <Link to={`/students/${student.id}/profile`} className="btn btn-sm btn-secondary">
                        👤 Profile
                      </Link>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>;
  }

  export default Students