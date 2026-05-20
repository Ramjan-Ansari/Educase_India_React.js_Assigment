import { Routes, Route } from 'react-router-dom'
import Landingpage from '../src/pages/Landingpage.jsx'
import Login from '../src/pages/Login.jsx';
import Signup from '../src/pages/Signup.jsx';
import Profile from '../src//pages/Profile.jsx';

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
