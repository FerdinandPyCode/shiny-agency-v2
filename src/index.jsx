import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Errorpage from './components/Errorpage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element ={<Freelances />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)