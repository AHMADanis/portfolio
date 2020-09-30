import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Thank you for connecting me!</h3>
          </GridContainer>
          <Button color="twitter">
            <i className={classes.socials + " fab fa-twitter"} /> Twiter
          </Button>
          <Button color="facebook">
            <i className={classes.socials + " fab fa-facebook-square"} /> Facebook
          </Button>
          <Button color="google">
            <i className={classes.socials + " fab fa-google-plus-g"} />
            Google
          </Button>
          <Button color="github">
            <i className={classes.socials + " fab fa-github"} /> Github
          </Button>
        </div>
      </div>
    </div>
  );
}
