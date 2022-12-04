import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
