// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/home';
import Login from './components/Login/login';
import Nosotros from './components/nosotros';
import Info from './components/Informacion_general/informacionGeneral';
import Perfil  from './components/Perfil/perfil'
// import Asistencia  from './components/asistencia'

// Styles
// import './App.css';

function App() {
  return (
      <BrowserRouter /* basename={process.env.PUBLIC_URL} */> {/* Descomentar para pruebas en github pages */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />     
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/info/:category" element={<Info/>}/>

          {/* <Route path="/perfil" element={<Perfil/>} />     
          <Route path="/login" element={<Login/>}/> */}

          {/* <Route path="/user/:user" element={<Asistencia/>}/> */}
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
