import { useContext } from 'react'
import ViewUserTable from './ViewUserTable';
import UserMainTable from './UserMainTable';
import { Getdata } from '../../apis/Helpers';
import Loader from '../loader';
import { DataContext, UserInfoContext } from '../Context/allContexts';


function UserList() {
    // const [userInfo, setUserInfo] = useState(0)
    const { userInfo, setUserInfo } = useContext(UserInfoContext)
    let { data: users, isLoading, isError, error } = Getdata("users");

    const { user, setUser } = useContext(DataContext)

    function romove(id) {
        const updatedUsers = user.filter((i) => i.id !== id);
        setUser(updatedUsers)
    }

    if (isLoading) return <Loader />
    if (isError) return <p>Error: {error}</p>;

    return (
        <>
            <UserMainTable table={
                user.map((user, i) => {
                    return (
                        <>
                            <ViewUserTable 
                            index={i + 1} 
                            key={user.id} 
                            user={user} 
                            userInfo={userInfo} 
                            setUserInfo={setUserInfo} 
                            romove={romove} />
                        </>
                    )
                })
            } 
            user={user} 
            setUser={setUser} 
            users={users} />
        </>
    )
}

export default UserList;
