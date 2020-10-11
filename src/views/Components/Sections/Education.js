import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Education() {
  return (
    <div>
      <Card />
    </div>
  );
}



const Card = (props) => {
  const classes = useStyles()
  return(
    <div className={classes.CardContainer}>
      <div>

      </div>
    </div>
  )
}


const useStyles = makeStyles ((theme) => ({
  CardContainer: {
    width: 300,
    height: 150,
    backgroundColor: "red"
  }
}))