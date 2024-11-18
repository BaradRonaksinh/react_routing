import React from 'react'
import { useNavigate } from 'react-router'
import ContextExample from './ContextExample'
import UsecontextEx from './UsecontextEx'

const UsenevigateExample = () => {
    const navigate = useNavigate()
    const addData = () => {
        navigate('/addUser')
    }
  return (
    <div>
      <button onClick={addData}>Add User</button>
      <button onClick={() => navigate('/dispUser')}>Display User</button>
      <UsecontextEx />
    </div>
  )
}

export default UsenevigateExample
