import React, { createContext, useContext } from 'react'

let Userdata = createContext();

const UsecontextEx = () => {
    let name = "abc";
    return (
        <div>
            <h2>Use-Context Hooks is Here</h2>
            <h2>Name is -- {name}</h2>
            <Userdata.Provider value={name}>
                <Cmp2 />
            </Userdata.Provider>
        </div>
    )
}
const Cmp2 = () => {
    return (
        <div>
            <h3>Component2</h3>
            <Cmp3 />
        </div>
    )
}
const Cmp3 = () => {
    return (
        <div>
            <h3>Component3</h3>
            <Cmp4 />
        </div>
    )
}
const Cmp4 = () => {
    let name = useContext(Userdata)
    return (
        <div>
            <h3>Component4</h3>
            <h3>Final name is -- {name}</h3>
        </div>
    )
}

export default UsecontextEx
