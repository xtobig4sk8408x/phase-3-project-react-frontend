import React from "react";

function Comment({comment}) {
    return (
        <div>
            <span>Rating: {comment.rating}</span>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment;