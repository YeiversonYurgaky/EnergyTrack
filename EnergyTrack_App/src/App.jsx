import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import RecoverPassword from './Pages/RecoverPassword';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
    </Routes>
  );
}

export default App;
