import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { container, title } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "70px 0"
      },
      container,
      title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
      },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(.5),
      },
    },

  }));
  


export default function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Skills & Experiences</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
            <span>
                        <p>
                             Main area of my expertise is front-end development.
                          HTML, CSS, JS(JavaScript), Kotlin, Swift, Flutter, C++. Building Web and Mobile
                          Apps with React and React-Native. 
                        </p>
                        <br />
                        <p>
                          I also have full-stack development Experience. I work with data bases and different node modules.
                          On the righ pane you can find 
                        </p>
                      </span>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={6}>
                <div className={classes.root}>
                <Chip
                        label="HTML"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="CSS"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="Java Script"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="NodeJS"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="React Native"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="React"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="SWift"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="Kotlin"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="JAVA"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="Flutter"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="C++"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                     <Chip
                        label="Github"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="Material UI"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="MySQL"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="FireBase"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />
                    <Chip
                        label="PostGress"
                        clickable
                        color="primary"
                        deleteIcon={<DoneIcon />}
                        variant="outlined"
                    />         
        </div>
                </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
