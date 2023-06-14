import './App.css'
import Analysis from './components/Analysis/Analysis'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </>
  )
}

export default App
