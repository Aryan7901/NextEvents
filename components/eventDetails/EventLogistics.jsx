// import AddressIcon from '../icons/address-icon';
// import DateIcon from '../icons/date-icon';
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";
import Image from "next/image";
import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
} from "@mui/material";
import { GoLocation } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <Card
      className={classes.logistics}
      sx={{ backgroundColor: "#2b2b2b", borderRadius: "8px" }}
    >
      <div className={classes.container}>
        <CardMedia className={classes.image}>
          <Image
            src={image}
            alt={imageAlt}
            layout="responsive"
            width="20rem"
            height="20rem"
            priority
          />
        </CardMedia>
      </div>
      <CardContent className={classes.list} component="ul">
        <li>
          <LogisticsItem icon={<GoLocation color="#aefff8" />}>
            <Typography color="secondary" variant="date">
              {humanReadableDate}
            </Typography>
          </LogisticsItem>
        </li>
        <li>
          <LogisticsItem icon={<BsCalendarDate color="#aefff8" />}>
            <Typography
              color="secondary"
              variant="address"
              component={"address"}
            >
              {addressText}
            </Typography>
          </LogisticsItem>
        </li>
      </CardContent>
    </Card>
  );
}

export default EventLogistics;
