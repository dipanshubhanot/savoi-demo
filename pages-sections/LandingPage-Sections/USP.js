import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { AccessTime, LocalHospital, Spa } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/usp.js";

const useStyles = makeStyles(styles);

export default function USP() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why Savoi?</h2>
          <h5 className={classes.description}>
            We specialise in architecturally designed homes which not only
            focuses on look and feel with contemporary designs but also
            integrates the science of energy flow.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Health & Wellbeing"
              description="Savoi designs create a major impact on your life style, on your heath, and your well being."
              icon={LocalHospital}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Energy Flow"
              description="We integrate Vaastu, Fengshui and other sciences for the flow of energies in the home to create harmony
              and good health for your family."
              icon={Spa}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Commitment"
              description="We take the stress away from you as we manage the project from inception to completion."
              icon={AccessTime}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
