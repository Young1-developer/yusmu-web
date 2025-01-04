import React from 'react'
// impoting bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// impoting customs components
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Courses from './Pages/Courses/Courses';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
// student files import 
import StudentLayout from './Pages/Student/StudentLayout/StudentLayout';
import StudentDashboard from './Pages/Student/Dashboard/StudentDashboard';
import StudentCourses from './Pages/Student/Courses/StudentCourses';
import StudentProjects from './Pages/Student/Projects/StudentProjects';
import Studentquiz from './Pages/Student/Quiz/Studentquiz';
import StudentProfile from './Pages/Student/StudentProfile/StudentProfile';
import StudentSettings from './Pages/Student/StudentSetting.js/StudentSetting';


// teacher files import
import TeacherLayout from './Pages/Teacher/TeacherLayout/TeacherLayout';
import Dashboard from './Pages/Teacher/Dashboard/Dashboard'
import UploadCourse from './Pages/Teacher/UploadCourse/UploadCourse'
import Students from './Pages/Teacher/CourseStudents/Students';
import Projects from './Pages/Teacher/SetProject/Projects';
import Profile from './Pages/Teacher/Profile/Profile';
import SetMessages from './Pages/Teacher/SetMessage/SetMessages';
import SetQuiz from './Pages/Teacher/SetQuiz/SetQuiz'
import Settings from './Pages/Teacher/Settings/Settings'


// css files
import './components/Styles/global.css'
import './components/Styles/animation.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route>
        <Route  element = {<Layout />} >
        <Route index element = {<Home />} />
        <Route path='about' element ={<About />} />
        <Route path='courses' element ={<Courses />} />
        <Route path='contact' element ={<Contact />} />
        
        <Route path='student' element={<StudentLayout />}> 

        <Route index element={ <StudentDashboard />} />
        <Route path='projects' element = {<StudentProjects />} />
        <Route path='mycourses' element = {< StudentCourses />} />
        <Route path='settings' element = {<StudentSettings />} />
       <Route path='quiz' element = {<Studentquiz />} />
       <Route path='profile' element ={ <StudentProfile />} />

        </Route>
        <Route path='teacher' element={<TeacherLayout />}>

        <Route index element= {<Dashboard />} />
        <Route path='quiz' element = {<SetQuiz />} />
        <Route path='upload' element = {<UploadCourse />} />
        <Route path='messages' element = {<SetMessages />} />
        <Route path='students' element = {<Students />} /> 
        <Route path='Projects' element = {<Projects />} />
        <Route path='Profile' element = {<Profile />} />
        <Route path='settings' element = {<Settings />} />
        
         </Route>
        <Route path='login' element ={<Login />} />
        </Route>

    </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App