import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import AddUserForm from './AddUserForm';
import { DataContext, ThemeContext } from '../Context/allContexts';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { ThemeContext } from '../Context/ThemeContext';
// import UserAdd from './UserAdd'

function UserMainTable({ table, users }) {

    const { user, setUser } = useContext(DataContext)

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        setUser(users)
    }, [users])

    const [userdata, setUserData] = useState([])
    const navigate = useNavigate(); // React Router hook to navigate to different routes

    function HeandalFormData(e) {
        setUserData((prev) => (
            { ...prev, [e.target.name]: e.target.value }
        ))
    }

    function HeandalSubmit() {
        if (!userdata.name || !userdata.username || !userdata.email) {
            alert("pls fill all required fields.")

            return
        } else {
            setUser((prev) => [...prev, userdata])
        }
        // Navigate to the home page ("/")
        navigate('/');
    }

    return (
        <div className=' container-fluid p-5'>
            <div className='d-flex flex-column align-items-center'>

                {/* Add User Form*/}
                <AddUserForm HeandalSubmit={HeandalSubmit} HeandalFormData={HeandalFormData} />

                {/* All User data */}
                <div className='row w-100'>
                    <div className='col-12'>
                        <table className={`table table-striped table-${theme}`}>
                            <thead>
                                <tr>
                                    <th className='ps-3'>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMainTable