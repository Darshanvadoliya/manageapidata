import { Getdata } from "../../apis/Helpers";
import PostList from "../Posts/PostList";

function PostWithComments({ post }) {
    const { data: comments, isLoading } = Getdata(`comments?postId=${post.id}`);
    post['comments'] = comments ? comments : []    

    return <PostList post={post} isLoading={isLoading}/>;
}

export default PostWithComments;
