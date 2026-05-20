import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Landingpage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
