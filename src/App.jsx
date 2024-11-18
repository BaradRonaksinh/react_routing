import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsenevigateExample from './UsenevigateExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adduser from './Adduser'
import Viewuser from './Viewuser'
import Userinfo from './Userinfo'

function App() {


  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UsenevigateExample />} />
            <Route path='/addUser' element={<Adduser />} />
            <Route path='/dispUser' element={<Viewuser />} />
            <Route path='/view/:id/:name' element={<Userinfo />} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
