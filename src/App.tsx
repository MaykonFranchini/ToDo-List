import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TaskBox } from './components/TaskBox'
import  './global.css'


function App() {
  

  return (
    <>
      <Header />
      <Input />
      <TaskBox />
    </>
  )
}

export default App
