import React from 'react'
// impoting bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { 
   Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
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
import CourseDetails from './Pages/Student/Courses/CourseDetails/CourseDetails';
import StudentProjects from './Pages/Student/Projects/StudentProjects';
import ProjectCreate from './Pages/Student/Projects/ProjectCreate';
import EditProject from './Pages/Student/Projects/EditProject';
import ProjectDetails from './Pages/Student/ProjetcDetails/ProjectDetails';

import Studentquiz from './Pages/Student/Quiz/Studentquiz';
import QuizApp from './Pages/Student/Quiz/QuizSection.js/QuizApp';
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


const router = createBrowserRouter(createRoutesFromElements(
  <Route  element = {<Layout />} >
  <Route index element = {<Home />} />
  <Route path='about' element ={<About />} />
  <Route path='courses' > 
    <Route index element = {<Courses />} />
  </Route>
  <Route path='contact' element ={<Contact />} />
  
  <Route path='student' element={<StudentLayout />}> 
  <Route index element={ <StudentDashboard />} />

  <Route path='projects' >
    <Route index element = {<StudentProjects />} />
    <Route path='create' element = {<ProjectCreate />} />
    <Route path=':id/:editproject' element = {<EditProject />} />
    <Route path='projectdetails/:id' element = {<ProjectDetails />} />

</Route>
  <Route path='mycourses' >
    <Route index element = {< StudentCourses />} />
    <Route path=':id/course-details' element = {<CourseDetails />} />
  </Route>
  <Route path='quiz' >
   <Route index element = {<Studentquiz />} />
   <Route path='quizsection' element = {<QuizApp/>} />
  </Route>
  <Route path='settings' element = {<StudentSettings />} />
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

))

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App