import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from "./components/pages/LandingPage";
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Dashboard from "./components/pages/Dashboard";
import UpdateCourse from "./components/pages/UpdateCourse";
import UpdateFaculty from "./components/pages/UpdateFaculty";
import UpdateStudent from "./components/pages/UpdateStudent";
import AdminLogin from "./components/Admin/AdminLogin";
import Login from "./components/pages/Login";
import SearchCourse from "./components/pages/SearchCourse"; 
import Register from './components/Admin/Register'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Updatecourse" element={<UpdateCourse/>} />
        <Route path="/Updatefaculty" element={<UpdateFaculty/>} />
        <Route path="/Updatestudent" element={<UpdateStudent/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/searchcourse" element={<SearchCourse/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
