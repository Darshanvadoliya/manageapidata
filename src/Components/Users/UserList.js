import { useState, useEffect } from 'react'
import ViewUserDetail from './ViewUserDetails';
import ViewUserTable from './ViewUserTable';
import UserMainTable from './UserMainTable';
import { Getdata } from '../../apis/Helpers';
import Loader from '../loader';


function UserList() {
    const [userInfo, setUserInfo] = useState(0)
    let { data: users, isLoading, isError, error } = Getdata("users");

    const [user, setUser] = useState([])
    
    function romove(id){
        const updatedUsers = user.filter((i) => i.id !== id);
        setUser(updatedUsers)
    }
    useEffect(()=>{

    },[user])

    if (isLoading) return <Loader/>
    if (isError) return <p>Error: {error}</p>;
    
    return (
        <>
            {!userInfo ?
                <UserMainTable table={
                    user.map((user, i) => {
                        return (
                            <>
                                <ViewUserTable index={i+1} key={i} user={user} userInfo={userInfo} setUserInfo={setUserInfo} romove={romove}/>
                            </>
                        )
                    })
                } user={user} setUser={setUser} users={users} />
                :
                userInfo && <div className='userdetails'>
                    <ViewUserDetail userid={userInfo} setUserInfo={setUserInfo} />
                </div>
            }
        </>
    )
}

export default UserList;
