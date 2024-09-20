import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { MealContextProvider } from './components/Context'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <BrowserRouter >
    <Navbar />
    <MealContextProvider >
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/meals'element={<Meals />} />
      <Route path='/meals/:productId'element={<Meals />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact'element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Dashboard' element={<Dashboard />} />
    </Routes>
    </MealContextProvider>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
