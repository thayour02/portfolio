import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Icon from './pages/icons'

function App() {

  return (
    <div className='background'>
      <Navbar />
      <Home />
      <Icon />
      <Footer />
    </div>


  )
}

export default App
