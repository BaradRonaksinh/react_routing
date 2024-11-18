import React from 'react'
import { useNavigate } from 'react-router'

const Viewuser = () => {
    const vNavigate = useNavigate();
    return (
        <div>
            <h2>Display User</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>abc</td>
                        <td>
                            <button>View</button>
                            <button onClick={() =>vNavigate('/view/1')}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ghj</td>
                        <td>
                            <button>View</button>
                            <button onClick={() =>vNavigate('/view/2')}>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>mnop</td>
                        <td>
                            <button>View</button>
                            <button onClick={() =>vNavigate('/view/3')}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Viewuser
