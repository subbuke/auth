import './App.css'
import {Route, Routes} from "react-router-dom"
import SignIn from './SignIn'
import SignUp from './SignUp'

function App() {
  

  return (
    <>
     <Routes>
     <Route path="/" element={<SignIn />}/>
     <Route path="/SignUp" element={<SignUp />}/>
     </Routes>
    </>
  )
}

export default App
