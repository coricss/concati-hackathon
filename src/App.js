import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppHome from './Pages/AppHome';
import AppRegister from './Pages/AppRegister';
import AppLogin from './Pages/AppLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<AppHome></AppHome>}></Route>
          <Route path="/register" element={<AppRegister></AppRegister>}></Route>
          <Route path="/login" element={<AppLogin></AppLogin>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
