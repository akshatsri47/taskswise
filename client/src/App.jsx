import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Task from "./pages/Task"
import{Route,Routes, BrowserRouter as Router} from 'react-router-dom'



export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Task />} />
      </Routes>
    </Router>
  )
}