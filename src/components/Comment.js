// import React, { useState } from "react";

// function Comment() {

//     const [comment, setComment] = useState("")
//     const [comments, setComments] = useState([])

//     const handleClick = () => {
//         setComments((comments) => [...comments, comment])
//     };
//     const onChangeHandler = (e) => {
//         setComment(e.target.value)
//     };

        // <p>Comment: {comment.comment}</p>
        // <span>Rating: {comment.rating}</span>

//     return (
//         <div className="main-container">
//             {comments.map((text) => (
//                 <div className="comment-container">{text}</div>
//             ))}
//             <div className="comment-flexbox">
//                 <h3 className="comment-text">Comments</h3>
//                 <textarea value={comment} onChange={onChangeHandler} className="input-box" />
//                 <button onClick={handleClick} className="comment-button">Submit</button> 
//             </div>
//         </div>
//     )
// }

// export default Comment;

        // <div className="main-container-rating">
        //     {ratings.map((number) => (
        //         <div className="rating-container">{number}</div>
        //     ))}
        //     <div className="rating-flexbox">
        //         <h3 className="rating-text">Rating</h3>
        //         <textarea value={rating} onChange={onChangeRatingHandler} className="input-box-rating" />
        //         <button onClick={handleRatingClick} className="rating-button">Submit</button> 
        //     </div>
        // </div>