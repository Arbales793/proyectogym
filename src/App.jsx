import { Routes, Route } from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import FormularioLogin from './componentes/FormularioLogin/FormularioLogin'
import Footer from './componentes/Footer/Footer'
import Home from './componentes/Home/Home'
import Admin from './componentes/Admin/Admin'
import './App.css'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* Otras rutas según tus necesidades */}
      </Routes>
      <FormularioLogin />
      <Footer />
    </div>
  );
}

export default App;
