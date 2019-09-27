/**
 * ************************************
 *
 * @module  TrailContainer.jsx
 * @author
 * @date
 * @description presentation component that displays the TrailDisplay and
 * CommentsDisplay
 * ************************************
 */
import React, { useState, useEffect } from "react";
import TrailDisplay from "../components/TrailDisplay.jsx";
import CommentsDisplay from "../components/CommentsDisplay.jsx";

//container component for individual TrailDisplay and CommentsDisplay
//maps through comments to pull desired values
const TrailContainer = (props) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  //adds comment and author to database and pulls back all comments for specified trail and sets to state
  const postComment = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trailid: props.selectedTrail.id,
        comment,
        username: props.username,
      })
     
    };
    fetch('/comments', options)
      .then(res => res.json())
      .then(res => {
        console.log("POST RES", res)
        setComment('');
        syncComments();
      })
      .catch(err => console.error('err',err));
  };

  const syncComments = () => {
    fetch(`/comments?trailid=${props.selectedTrail.id}`)
      .then(res => res.json())
      .then(res => {
        let theCommentsWeNeed = res.map(comment => ({
          comment: comment.comment,
          username: comment.username,
        }));
        setComments(theCommentsWeNeed);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    syncComments();
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    postComment();
    setComment('');
  }
  let commentsArray;
  if (comments.length) {
    commentsArray = comments.map((cur, idx) => (
      <CommentsDisplay
        key = {idx}
        comment = {cur.comment}
        username = {cur.username}
      />
    ));
  }

  return (
    <div className='modalGuts'>
      <button onClick={() => props.setSelectedTrail(null)}>close</button>
      <TrailDisplay selectedTrail={props.selectedTrail} />
      <div className="comments">
        {commentsArray}
        
      </div>
      <form className="commentInput">
        <input
          type="text"
          name="comment"
          id="commentForm"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <br />
        <button
          value="Submit"
          id={props.selectedTrail.id}
          onClick={(e) => handleClick(e)}
        >Submit</button>
      </form>
    </div>
  );
};

export default TrailContainer;
