import Image from "next/image";
import React from "react";
import classes from "./EventItem.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CustomBtn from "../ui/LinkBtn";
import Typography from "@mui/material/Typography";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
function EventItem(props) {
  const router = useRouter();
  const { event } = props;
  const readableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = event.location.split(", ");
  return (
    <Card className={classes.card} component="li">
      <CardMedia className={classes.media}>
        <Image
          src={"/" + event.image}
          alt="Event Image"
          width={256}
          height={200}
          layout="responsive"
        />
      </CardMedia>
      <Container className={classes.details}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {event.title}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="body1"
            component={"date"}
            color="text.secondary"
            gutterBottom
          >
            <span className={classes.icon}>
              <BsCalendarDate />
            </span>
            {readableDate}
          </Typography>
          <div>
            <span className={classes.icon}>
              <GoLocation />
            </span>
            {formattedLocation.map((field, index) => {
              return (
                <Typography
                  variant="address"
                  color={"text.secondary"}
                  component="address"
                  key={index}
                >
                  {field}
                </Typography>
              );
            })}
          </div>
        </CardContent>
        <CardActions className={classes.action}>
          <CustomBtn link={`/events/${event.id}`} text="Explore Events" />
        </CardActions>
      </Container>
    </Card>
  );
}

export default EventItem;
