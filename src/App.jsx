
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home'
import { Signup } from './pages/Signup/Signup'
import { Login } from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from './context/authContext'

function App() {
  const {authUser} = useAuthContext()
  return <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
    </Routes>
    <ToastContainer position='bottom-left' theme='colored'/>

   
  </div>
}

export default App
