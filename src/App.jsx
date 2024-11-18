import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsenevigateExample from './UsenevigateExample'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adduser from './Adduser'
import Viewuser from './Viewuser'
import Userinfo from './Userinfo'
import { lazy, Suspense } from 'react'


const Home = lazy(() => import('./Home'))
const Contact = lazy(() => import('./Contact'))

function App() {


  return (
    <>
    <Suspense>
      <Home />
    </Suspense>
    <Suspense>
      <Contact />
    </Suspense>
        {/* <BrowserRouter>   //Routing and navigate
          <Routes>
            <Route path='/' element={<UsenevigateExample />} />
            <Route path='/addUser' element={<Adduser />} />
            <Route path='/dispUser' element={<Viewuser />} />
            <Route path='/view/:id/:name' element={<Userinfo />} />
          </Routes>
        </BrowserRouter> */}
      
    </>
  )
}

export default App
