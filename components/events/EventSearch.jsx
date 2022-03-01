import { Button } from "@mui/material";
import React, { useRef } from "react";
import classes from "./EventSearch.module.css";
function EventSearch(props) {
  const monthRef = useRef();
  const yearRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2021">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={monthRef}>
            <option value="01">January</option>
            <option value="02">Febuary</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button variant="contained" onClick={submitHandler}>
        Search
      </Button>
    </form>
  );
}

export default EventSearch;
