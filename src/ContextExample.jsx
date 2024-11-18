import React from 'react'

const ContextExample = () => {
    let name = "abc";
  return (
    <div>
      <h3>Context Example</h3>
      <h3>Name is -- {name}</h3>
      <Cmp2 name={name}/>
    </div>
  )
}
const Cmp2 = ({name})=>{
    return(
        <div>
            <h3>Component2</h3>
            <Cmp3 name={name} />
        </div>
    )
}
const Cmp3 = ({name})=>{
    return(
        <div>
            <h3>Component3</h3>
            <Cmp4 name={name} />
        </div>
    )
}
const Cmp4 = ()=>{
    return(
        <div>
            <h3>Component4</h3>
        </div>
    )
}

export default ContextExample
