// import { useEffect, useState } from "react"
// import PostList from "../Posts/PostList";
import { useContext } from "react";
import { Getdata } from "../../apis/Helpers";
import PostWithComments from "../Comments/PostWithComments";
import Loader from "../loader";
import { ThemeContext, UserInfoContext } from "../Context/allContexts";
import { Link } from "react-router-dom";

function ViewUserDetail() {
    const { userInfo, setUserInfo } = useContext(UserInfoContext)  
    
    const { theme } = useContext(ThemeContext)
    let userId = `posts?userId=${userInfo}`
    let { data: posts, isLoading, isError, error } = Getdata(userId)

    if (isLoading) return <Loader />
    if (isError) return <p>Error: {error}</p>;

    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-5 pt-3">
                <h1 className={`${theme}_theme_h3`}>User Posts :</h1>
                <Link to='/'> <button className="btn btn-primary" onClick={() => setUserInfo(null)}>Close</button></Link>
                {/*  */}
            </div>
            <div className="user_post px-5 row w-100">
                {posts?.map((post, i) => {
                    // console.log("post =>",post);
                    return (
                        <PostWithComments post={post} key={i} />
                    )
                })}
            </div>

        </>
    )

}

export default ViewUserDetail



// async function fetchPost() {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
//         let Postdata = await response.json()
//         SetPost(Postdata)
//     } catch (error) {
//         console.log(error);
//     }
// }