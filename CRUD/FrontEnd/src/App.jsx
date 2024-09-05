import React from 'react'
import Create from './components/Create/Create'
import Home from './components/Home/Home'
import Read from './components/Read/Read'
import Edit from './components/Edit/Edit'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/read/:id" element={<Read/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
