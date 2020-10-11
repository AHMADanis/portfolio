import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import profile from "assets/img/faces/ahmad.jpeg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import SectionTabs from "views/Components/Sections/SectionTabs";
import SectionPills from "views/Components/Sections/SectionPills";
import WorkSection from "views/LandingPage/Sections/WorkSection";
import SectionDownload from "views/Components/Sections/SectionDownload";
import Skills from "views/Components/Sections/Skills";
import Education from "views/Components/Sections/Education";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Anees Ahmad</h3>
                    <h6>SOFTWARE DEVELOPER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              A self-motivated IT professional with huge knowledge and proficiency in 
              JavaScript, HTML, CSS, and mobile responsive web development, 
              as well as strong skills and ability in writing clean and efficient code.{" "}
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <Education />
        <SectionCarousel />
        <SectionTabs />
        <SectionPills />
        <WorkSection />
        <SectionDownload />
      </div>
    </div>
  );
}
