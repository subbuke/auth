import './App.css'
import {Route, Routes} from "react-router-dom"
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgetPassword from './ForgetPassword'

function App() {
  

  return (
    <>
     <Routes>
     <Route path="/" element={<SignIn />}/>
     <Route path="/SignUp" element={<SignUp />}/>
     <Route path="/ForgetPassword" element={<ForgetPassword />}/>
     </Routes>
    </>
  )
}

export default App
