import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
     <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer />
     </div>
  );
}

export default App;
