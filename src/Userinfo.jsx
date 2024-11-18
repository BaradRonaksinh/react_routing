import React from 'react'
import { useParams } from 'react-router'
import ContextExample from './ContextExample';

const Userinfo = () => {
    let { id, name } = useParams();

    return (
        <div>
            <h3>Id is .. {id}</h3>
            <h3>Name is .. {name}</h3>
        </div>
    )
}

export default Userinfo
