
import './styles/home.css'
import './styles/navbar.css'
import './styles/products.css'
import './styles/gallery.css'
import './styles/about.css'
import './styles/form.css'
import './styles/footer.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import About from './pages/About'
import ContactForm from './pages/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Gallery />
      <About />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
