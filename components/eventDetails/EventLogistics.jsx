// import AddressIcon from '../icons/address-icon';
// import DateIcon from '../icons/date-icon';
import LogisticsItem from "./LogisticsItem";
import classes from "./EventLogistics.module.css";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
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
    <Container className={classes.logistics}>
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            src={image}
            alt={imageAlt}
            layout="responsive"
            className={classes.img}
            width="20rem"
            height="20rem"
          />
        </div>
      </div>
      <ul className={classes.list}>
        <div>
          <LogisticsItem icon={<GoLocation color="#aefff8" />}>
            <Typography color="secondary" variant="date">
              {humanReadableDate}
            </Typography>
          </LogisticsItem>
          <LogisticsItem icon={<BsCalendarDate color="#aefff8" />}>
            <Typography
              color="secondary"
              variant="address"
              component={"address"}
            >
              {addressText}
            </Typography>
          </LogisticsItem>
        </div>
      </ul>
    </Container>
  );
}

export default EventLogistics;
