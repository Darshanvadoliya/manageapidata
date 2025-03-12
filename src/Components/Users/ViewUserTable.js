import React from 'react'
// import Table from './Table'

function ViewUserTable({ user, userInfo, setUserInfo, index, romove }) {
    return (
        <tr>
            <td className='ps-4'>{index}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td className=''>
                <button onClick={() => setUserInfo(user.id)} className='border-0 me-4 text-white py-1 px-2 bg-success rounded-1'><i class="fa-solid fa-eye"></i></button>
                <button className='border-0 text-white py-1 px-2 bg-danger rounded-1' onClick={() => romove(user.id)}><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}

export default ViewUserTable