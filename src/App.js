import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Programs from './Components/Programs/Programs'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import ProgramDetails from './Components/ProgramDetails/ProgramDetails'


const App = () => {

  return (
    <Router>
    
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    
    
      <Routes>
        <Route path='programs/' element={<Programs/>} />
      </Routes>
      <Routes>
        <Route path='programs/:url' element={<ProgramDetails/>} />
      </Routes>
      <Routes>
        <Route path='about/' element={<aboutUS/>} />
      </Routes>
      <Routes>
        <Route path='campus/' element={<Campus/>} />
      </Routes>
      <Routes>
        <Route path='testimonials/' element={<Testimonials/>} />
      </Routes>
      <Routes>
        <Route path='contact/' element={<Contact/>} />
      </Routes>
    
    
    
    </Router>
  )
}

export default App