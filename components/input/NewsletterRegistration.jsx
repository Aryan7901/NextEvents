import { Button, TextField, Typography } from "@mui/material";
import classes from "./NewsletterRegistration.module.css";
import { useRef, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
function NewsletterRegistration() {
  const emailRef = useRef();
  const [feedback, setFeedback] = useState(null);
  function registrationHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    if (!email || !email.includes("@")) {
      console.log("Invalid Email");
    } else {
      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(setFeedback(data.message)));
    }
  }
  const severity = feedback === "Signed Up!" ? "success" : "error";
  return (
    <section className={classes.newsletter}>
      <Typography variant="h5">Sign up to stay updated!</Typography>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <TextField
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            size="small"
            inputRef={emailRef}
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
        </div>
      </form>
      {feedback && (
        <Alert severity={severity}>
          <AlertTitle>{feedback}</AlertTitle>
        </Alert>
      )}
    </section>
  );
}

export default NewsletterRegistration;
