import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppHome from './Pages/AppHome';
import AppRegister from './Pages/AppRegister';
import AppLogin from './Pages/AppLogin';
import AppPasswordReset from './Pages/AppPasswordReset';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<AppHome></AppHome>}></Route>
          <Route path="/register" element={<AppRegister></AppRegister>}></Route>
          <Route path="/login" element={<AppLogin></AppLogin>}></Route>
          <Route path="/password_reset" element={<AppPasswordReset></AppPasswordReset>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
