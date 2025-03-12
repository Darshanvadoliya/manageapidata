import React, { useEffect, useState } from 'react'
import { Getdata } from '../../apis/Helpers';

function UserAdd({setToggel}) {
    const { data, isLoading, isError, error } = Getdata("users");
    
    const [ user, setUser ] = useState([]) 
    const [ userdata, setUserData ] = useState([])
    
    useEffect(()=>{
        setUser(data)
    },[data])

    console.log("User Data",user);

    function HeandalFormData (e){
        setUserData((prev)=> ({...prev,[e.target.name]:e.target.value}))
    }

    function HeandalSubmit(){
        setUser((prev)=> [...prev, userdata])
        setToggel(0)
    }
    console.log("User form data",userdata);
    
  return (
    <div className='main_form d-flex flex-column align-items-center'>
        <h1>Add New User</h1>
        <div className='form_info p-4 w-25 border'>
            <form>
                <div className='form_input d-flex flex-column mb-3'>
                    <label>Name</label>
                    <input className='' type='text' name='name' onChange={(e)=> HeandalFormData(e)}/>
                </div>
                <div className='form_input d-flex flex-column mb-3'>
                    <label>USer Name</label>
                    <input className='' type='text' name='username' onChange={(e)=> HeandalFormData(e)}/>
                </div>
                <div className='form_input d-flex flex-column mb-3'>
                    <label>Enter Email</label>
                    <input className='' type='text' name='email' onChange={(e)=> HeandalFormData(e)}/>
                </div>
                <div className='form_input d-flex flex-column mb-3'>
                <button type="button" class="btn bg-primary text-white" onClick={()=>HeandalSubmit()}>Add USer</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserAdd