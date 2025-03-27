import React, { useContext } from 'react'
import { ThemeContext } from '../Context/allContexts'
import { Link } from 'react-router-dom'

function AddUserForm({HeandalSubmit,HeandalFormData}) {

    // const { user, setUser } = useContext(DataContext)
    const { theme } = useContext(ThemeContext)
    // console.log("usuer inside the ",user);


    return (
        <div className='d-flex justify-content-between w-100 mb-3'>
            <h3 className={`fw-bold ${theme}_theme_h3`}>User List</h3>
            <Link to='/adduser'>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add User
            </button>
            </Link>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='main_form d-flex flex-column align-items-center'>
                                <h3>Add New User</h3>
                                <div className='form_info p-4 w-100'>
                                    <form>
                                        <div className='form_input d-flex flex-column mb-3'>
                                            <label>Name :</label>
                                            <input tabIndex='0' className='' type='text' name='name' placeholder='Enter Name' onChange={(e) => HeandalFormData(e)} />
                                            <span style={{ display: 'none' }}>{ }</span>
                                        </div>
                                        <div className='form_input d-flex flex-column mb-3'>
                                            <label>USer Name :</label>
                                            <input tabIndex='0' className='' type='text' name='username' placeholder='Enter Username' onChange={(e) => HeandalFormData(e)} />
                                        </div>
                                        <div className='form_input d-flex flex-column mb-3'>
                                            <label>Enter Email :</label>
                                            <input tabIndex='0' className='' type='text' name='email' placeholder='Enter Email' onChange={(e) => HeandalFormData(e)} />
                                        </div>
                                        <div className='form_input d-flex flex-column mb-3'>
                                            <button type="button" className="btn bg-primary text-white" onClick={() => HeandalSubmit()} data-dismiss="modal">
                                                Add USer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserForm