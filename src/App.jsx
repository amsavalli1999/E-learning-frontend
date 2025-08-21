
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Header from './components/header/header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';
import Footer from './components/footer/Footer'
import About from './pages/about/About.jsx'
import Account from './pages/account/Account.jsx';
import { UserData } from './context/UserContext.jsx';
import Courses from './pages/courses/Courses.jsx'
import Loading from "./components/loading/Loading.jsx";
import CourseDescription from "./pages/coursedescription/CourseDescription.jsx";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import CourseStudy from "./pages/courseStudy/CourseStudy.jsx";
import Lecture from "./pages/lecture/Lecture.jsx";
import AdminDashborad from "./admin/Dashboard/AdminDashborad.jsx";
import AdminCourses from "./admin/Courses/AdminCourses.jsx";
import AdminUsers from "./admin/User/AdminUsers.jsx";

const App = () => {
  const {isAuth,user,loading } = UserData()
  return(
  <>
  {loading ? (
    <Loading/>
  ):(
  <BrowserRouter>
  <Header isAuth ={isAuth}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
     <Route path='/courses' element={<Courses/>}/>
    <Route path='/account' element={isAuth ? <Account user={user}/> : <Login/>}/>
    <Route path='/login' element={isAuth ?<Home/>: <Login/>  }/>
    <Route path='/register' element={isAuth ?<Register/>:<Home/>}/>
    <Route path='/verify' element={isAuth ? <Verify/>:<Home/> }/>
    <Route path="/course/:id" element={<CourseDescription user ={user} />} />
    <Route path="/payment-success/:id" element = {isAuth ? <PaymentSuccess user ={user} /> :<Login/>}/>
    <Route path="/:id/dashboard" element = {isAuth ? <Dashboard user ={user} /> :<Login/>}/>
        <Route path="/course/study/:id" element = {isAuth ? <CourseStudy user ={user} /> :<Login/>}/>
        <Route path="/lectures/:id" element = {isAuth ? <Lecture user ={user} /> :<Login/>}/>
<Route path="/admin/dashboard" element={isAuth ? <AdminDashborad user= {user}/>:<Login/>}/>
<Route path="/admin/course" element={isAuth ? <AdminCourses user= {user}/>:<Login/>}/>
<Route path="/admin/users" element={isAuth ? <AdminUsers user= {user}/>:<Login/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
  )}
  </>
  
  )
};
export default App;
