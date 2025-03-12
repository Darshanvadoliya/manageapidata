// import { useEffect, useState } from "react"
// import PostList from "../Posts/PostList";
import { Getdata } from "../../apis/Helpers";
import PostWithComments from "../Comments/PostWithComments";
import Loader from "../loader";

function ViewUserDetail({ userid, setUserInfo }) {

    // console.log(userid);
    let userId = `posts?userId=${userid}`
    let { data: posts, isLoading, isError, error } = Getdata(userId)
    // console.log("Post data =>", posts);

    if (isLoading) return <Loader/>
    if (isError) return <p>Error: {error}</p>;

    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-5 pt-3">
                <h1 className="">User Posts :</h1>
                <button className="btn btn-primary" onClick={() => setUserInfo(null)}>Close</button>
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

    // for (const post of data) {
    //     let postId = post.id
    //     let comments = `comments?postId=${postId}`
    // let [ data, isLoading, isError, error ] = Getdata(comments)
    //     console.log("post comment =>",data);

    // }
    // function fetchPost() {
    //     try {

    //         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    //             .then((response) => response.json())
    //             .then((postData) => {
    //                 SetPost(postData)

    //                 let counter = 0;
    //                 // for loop to push the comments in posts
    //                 for (let i = 0; i < postData.length; i++) {
    //                     // console.log("Post Id =>", data[i].id);
    //                     try {
    //                         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postData[i].id}`)
    //                             .then((comments) => comments.json())
    //                             .then((commentData) => {
    //                                 console.log('comments got', commentData);

    //                                 postData[i].comments = commentData;
    //                                 counter++
    //                                 if (counter === postData.length) {
    //                                     SetPost(postData);
    //                                 }
    //                             })
    //                             .catch((error) => console.log(error));
    //                     } catch (error) {
    //                         console.log("error in try catch =>", error);
    //                     }
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.log("fetch Post Error => ", error);
    //             });
    //     } catch (error) {
    //         console.log("fetch Post Error => ", error);
    //     }
    // }
    // useEffect(() => {
    //     fetchPost()
    // }, [])


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