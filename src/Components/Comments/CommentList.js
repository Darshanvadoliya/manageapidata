import React from 'react'

function CommentList({comment}) {
    return (
        <div className="post_comment p-2 mb-2 rounded-1">
            <h6 className="fw-bold mb-1">{comment?.name}</h6>
            <p className="mb-1 fw-medium">{comment?.email}</p>
            <p className="mb-0 bg">{comment?.body}</p>
        </div>
    )
}
export default CommentList