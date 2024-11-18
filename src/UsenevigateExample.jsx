import React from 'react'
import { useNavigate } from 'react-router'

const UsenevigateExample = () => {
    const navigate = useNavigate()
    const addData = () => {
        navigate('/addUser')
    }
  return (
    <div>
      <button onClick={addData}>Add User</button>
      <button onClick={() => navigate('/dispUser')}>Display User</button>
    </div>
  )
}

export default UsenevigateExample
