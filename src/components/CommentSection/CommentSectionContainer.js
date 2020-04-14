// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
//console.log(props)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {/*props.comments is comments from dummyData. comment argument will be objects from props.comments, next is the comment component. last comment is equal to comments argument.   */}
      {comments.map((comment, index) => {
       return <Comment key={index} comment={comment}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
