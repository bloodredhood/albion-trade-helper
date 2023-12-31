import React from "react"
import './App.css'
import AddNew from './pages/AddNew/AddNew'
import Header from './comps/Header'
import MainOld from './pages/Main/MainOld'
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainOld />} />
        <Route path="/add" element={<AddNew />} />
      </Routes>
    </>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
