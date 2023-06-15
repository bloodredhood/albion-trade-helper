import './App.css'
import AddNew from './pages/AddNew/AddNew'
import Header from './comps/Header'
import Main from './pages/Main/Main'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<AddNew />} />
      </Routes>
    </>
  )
}

export default App
