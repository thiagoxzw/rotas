import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produto from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 text-gray-900">
        <NavBar/>
        <main>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/sobre' element={<Sobre/>}></Route>
            <Route path='/contato' element={<Contato />}></Route>
            <Route path='/produto' element={<Produto/>}></Route>
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
