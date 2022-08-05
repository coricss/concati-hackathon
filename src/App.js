import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, hashHistory } from 'react-router-dom';

import AppErrorMessage from './Pages/AppErrorMessage';
import AppHome from './Pages/AppHome';
import AppRegister from './Pages/AppRegister';
import AppLogin from './Pages/AppLogin';
import AppPasswordReset from './Pages/AppPasswordReset';
import AppUser from './Pages/AppUser';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route index element={<AppHome></AppHome>}></Route>
          <Route path="/register" element={<AppRegister></AppRegister>}></Route>
          <Route path="/login" element={<AppLogin></AppLogin>}></Route>
          <Route path="/password_reset" element={<AppPasswordReset></AppPasswordReset>}></Route>
          <Route path="/inbox" element={<AppUser></AppUser>}></Route>
          <Route path="/user/:username" element={<AppUser></AppUser>}></Route>
          <Route path="*" element={
           <AppErrorMessage></AppErrorMessage>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
