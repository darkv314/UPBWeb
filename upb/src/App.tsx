import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import './App.css'
import Home from './Pages/home/Home'
import UPBMatch from './Pages/UPBMatch/UPBMatch'
import Contactanos from './Pages/contactanos/Contactanos'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/UPBMatch",
      element: <UPBMatch />
    },
    {
      path: "/Contactanos",
      element: <Contactanos />
    }
  ])
  return (
    <>
      <Nav />
       <RouterProvider router={router} />
      <Footer />
    </>
  )
}
