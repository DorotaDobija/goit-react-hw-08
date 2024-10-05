import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Phonebook } from './pages/Phonebook'
import { SharedLayout } from './components/SharedLayout/SharedLayout'

export const App = () => {
  
  return (
    <SharedLayout>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/phonebook' element={<Phonebook/>} />
    </Routes>
    </SharedLayout>
  )
}


