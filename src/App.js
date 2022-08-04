import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppHome from './Pages/AppHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<AppHome></AppHome>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
