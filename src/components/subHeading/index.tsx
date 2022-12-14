import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subHeading: {
      marginTop: "70px",
      padding: "0px 50px",

      "@media only screen and (max-width: 767px)": {
        marginTop: "70px",
        padding: "0px 20px",
      },
    },
  })
);

const SubHeading = () => {
  const classes = useStyles();

  return (
    <Grid
      // style={{ marginTop: "40px", padding: "0px 50px" }}
      className={classes.subHeading}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
    >
      <Typography fontWeight="bold" fontSize="22px">
        Pricing Calculator
      </Typography>
      <Typography
        fontWeight="bold"
        fontSize="14px"
        style={{ color: "#808183" }}
      >
        Calculate your estimated monthly costs for using QCloud.
      </Typography>
    </Grid>
  );
};

export default SubHeading;
