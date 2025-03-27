import React, { use, useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext, UserInfoContext } from '../Context/allContexts'
// import Table from './Table'

function ViewUserTable({ user, index, romove }) {

    // const { user, setUser } = useContext(DataContext)
    
    const { userInfo, setUserInfo } = useContext(UserInfoContext)

    return (
        <tr key={user.id}>
            <td className='ps-4'>{index}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td className=''>
            <Link to='/UserPost'>
                <button onClick={() => setUserInfo(user.id)} className='border-0 me-4 text-white py-1 px-2 bg-success rounded-1'>
                    <i className="fa-solid fa-eye"></i>
                </button>
            </Link>
            <Link to='/user/delete'>
                <button className='border-0 text-white py-1 px-2 bg-danger rounded-1' onClick={() => romove(user.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </Link>
            </td>
        </tr>
    )
}

export default ViewUserTable