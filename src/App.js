import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Dashboard />}></Route>
      <Route path='/employee' exact element={<Employee />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
