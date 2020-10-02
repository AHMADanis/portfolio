import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        //brand="ANEES AHMAD"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Web & Mobile Apps Developer</h1>
                {/* <h3 className={classes.subtitle}>
                  Hello, I'm Anees Ahmad. I'm a full-stack web and mobile application developer
                </h3> */}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
          <ProfilePage />
      {/* <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
      </div> */}
      <Footer />
    </div>
  );
}
