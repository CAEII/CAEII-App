// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Home from './components/home';
import Login from './components/login';
import Nosotros from './components/nosotros';
import Info from './components/Informacion_general/informacionGeneral';
import Perfil  from './components/Perfil/perfil'
// import PerfilQrsPRUEBA  from './components/perfil_qrs_PRUEBA' // componente de prueba para los qrs
// Styles
// import './App.css';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />     
          {/* <Route path="/perfil" element={<Perfil/>} />      */}
          {/*<Route path="/user/:id" element={<Asistencia/>}/>   url para marcar asistencia */}
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/info/:category" element={<Info/>}/>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
