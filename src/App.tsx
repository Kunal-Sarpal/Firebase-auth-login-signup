
import { Link, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {

  return (
    <div style={{ width: "100%", height: "60vh", border: "2px solid red", fontFamily: "Neue Montreal", position: "relative", fontSize:"30px" }}>
      <nav>
        <div><Link to="/login">Login</Link></div>
        <div><Link to="/SignUp">Signup</Link></div>

      </nav>
      <div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
      </div>

    </div>
  )
}

export default App