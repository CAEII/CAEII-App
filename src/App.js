import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Login from "./components/login";
import './App.css';
import Home from './components/home';
import HeaderBar from './components/header';
import Nosotros from './components/nosotros';
// import Perfil  from './components/perfil'
//import PerfilQrsPRUEBA  from './components/perfil_qrs_PRUEBA' // componente de prueba para los qrs

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />     
          {/* <Route path="/perfil" element={<Perfil/>} />      */}
          {/*<Route path="/perfil/:id" element={<PerfilQrsPRUEBA/>}/>    perfil con parametro de ids para generar el qr */}
          {/*<Route path="/user/:id" element={<Asistencia/>}/>   url para marcar asistencia */}
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/nosotros" element={<Nosotros/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
