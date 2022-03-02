import { Alert, Container, Typography } from "@mui/material";
import classes from "./CommentList.module.css";
import useSWR from "swr";

function CommentList({ eventId }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/comments/${eventId}`, fetcher);

  if (!data && !error) {
    return <Alert severity="info">Loading....</Alert>;
  } else if (error) {
    return <Alert severity="error">Error loading comments</Alert>;
  } else
    return (
      <ul className={classes.comments}>
        {data.map((comment) => {
          return (
            <li key={comment._id}>
              <Typography>{comment.text}</Typography>
              <Container>
                By <address>{comment.name}</address>
              </Container>
            </li>
          );
        })}
      </ul>
    );
}

export default CommentList;
