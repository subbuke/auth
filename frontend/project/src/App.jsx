import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Dashboard from "./Dashboard.jsx";

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Dashboard" element={<Dashboard />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
