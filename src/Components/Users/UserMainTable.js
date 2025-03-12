import React from 'react'
import { useEffect, useState } from 'react';
// import UserAdd from './UserAdd'
// import Table from './Table'


function UserMainTable({ table, users, setUser,}) {
    
    useEffect(() => {
        setUser(users)
    }, [users])

    const [ userdata, setUserData ] = useState([])

    function HeandalFormData(e) {
        setUserData((prev) => (
            { ...prev, [e.target.name]: e.target.value }
        ))
    }

    function HeandalSubmit() {
        if(!userdata.name || !userdata.username || !userdata.email){
            alert("pls fill all required fields.")
            return
        }else{
            setUser((prev) => [...prev, userdata])
        }
    }

    return (
        <div className=' container-fluid p-5'>
            <div className='d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-between w-100 mb-3'>
                    <h3 className='fw-bold'>User List</h3>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add User
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div className='main_form d-flex flex-column align-items-center'>
                                        <h1>Add New User</h1>
                                        <div className='form_info p-4 w-100'>
                                            <form>
                                                <div className='form_input d-flex flex-column mb-3'>
                                                    <label>Name :</label>
                                                    <input className='' type='text' name='name' placeholder='Enter Name' onChange={(e) => HeandalFormData(e)}/>
                                                </div>
                                                <div className='form_input d-flex flex-column mb-3'>
                                                    <label>USer Name :</label>
                                                    <input className='' type='text' name='username' placeholder='Enter Username' onChange={(e) => HeandalFormData(e)} />
                                                </div>
                                                <div className='form_input d-flex flex-column mb-3'>
                                                    <label>Enter Email :</label>
                                                    <input className='' type='text' name='email' placeholder='Enter Email' onChange={(e) => HeandalFormData(e)} />
                                                </div>
                                                <div className='form_input d-flex flex-column mb-3'>
                                                    <button type="button" class="btn bg-primary text-white" onClick={() => HeandalSubmit()} data-dismiss="modal">Add USer</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100'>
                    <div className='col-12'>
                        <table className='table table-striped '>
                            <thead>
                                <tr>
                                    <th className='ps-3'>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                                {/* <Table /> */}
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