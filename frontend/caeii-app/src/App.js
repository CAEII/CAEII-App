import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Login from "./components/login";
import './App.css';
import Home from './components/home';
import HeaderBar from './components/header';
import Nosotros from './components/nosotros';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/nosotros" element={<Nosotros/>}/>
      </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
