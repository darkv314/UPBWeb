import { useState } from 'react'
import Nav from './modules/nav/Nav'
import TopSide from './home/top-side/TopSide'
import BottomSide from './home/bottom-side/BottomSide'
import Footer from './modules/footer/Footer'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import './App.css'
import Home from './home/Home'
import UPBMatch from './UPBMatch/UPBMatch'
import Contactanos from './contactanos/Contactanos'

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
