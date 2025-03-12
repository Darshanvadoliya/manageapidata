import CommentList from '../Comments/CommentList';
import Loader from '../loader';

function PostList({ post, isLoading }) {

    function loader (){
        if (isLoading) return <Loader/> 
    }
    return (
        <div className="col-4 p-2">
            <div className="post_info p-3 h-100 rounded-2">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div className="comment_box p-2 rounded-3">
                    <h4>Comments</h4>
                    { isLoading ? loader() :
                        post?.comments?.length <= 0 ? <>loading </> :
                            post.comments.map((comment, j) => (
                                <CommentList comment={comment} key={j} />
                            ))}
                </div>
            </div>
        </div>
    );
}

export default PostList;
