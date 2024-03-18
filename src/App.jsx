import './App.css'
import FormularioLogin from './componentes/FormularioLogin/FormularioLogin'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

function App() {

  return (
    <>
      <div className="app">
        <FormularioLogin/>
        <Footer/>
        <Header/>
      </div>
    </>
  )
}

export default App
