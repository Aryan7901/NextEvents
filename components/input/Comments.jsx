import { useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";
import classes from "./Comments.module.css";
import { Button } from "@mui/material";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "applicaton/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <section className={classes.comments}>
      <Button onClick={toggleCommentsHandler} variant="outlined">
        {showComments ? "Hide" : "Show"} Comments
      </Button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList eventId={eventId} />}
    </section>
  );
}

export default Comments;
