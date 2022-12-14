import * as React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../card/card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabPanel: {
      display: "flex",

      // "@media only screen and (max-width: 767px)": {
      //   padding: "1px",
      // },
    },
  })
);

export default function ComputeTab(props: any) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const {
    increaseGPCount,
    increaseHP1Count,
    increaseHP2Count,
    increaseBMCount,
  } = props;
  const classes = useStyles();
  let GPDetails: string =
    "Create, develop and launch your business applications on a flexible, secure and on-demand compute resources on the cloud";
  let HP1Details: string =
    "ECS - High Performance 1 will provide you on-the-fly scalability for your business applications through a simple interface.";
  let HP2Details: string =
    "ECS - High Performance 2 will provide you on-the-fly scalability for your business applications through a simple interface.";
  let BareMetal: string =
    "QCloud’s Metal Service (MS) provides dedicated physical servers in single-tenant environments. It provides excellent computing performance and data security for core databases, key application systems, and high - performance computing";
  return (
    <div>
      <Grid container className={classes.tabPanel}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"General Purpose"}
            details={GPDetails}
            // componenent={<GeneralPurpose countList={countList} />}
            btnOnClick={increaseGPCount}
            btnText={"Add to Estimate"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"High Performance 1"}
            details={HP1Details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseHP1Count}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"High Performance 2"}
            details={HP2Details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseHP2Count}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <CustomCard
            name={"Bare Metal"}
            details={BareMetal}
            btnText={"Add to Estimate"}
            btnOnClick={increaseBMCount}
          />
        </Grid>
      </Grid>

      {/* <Grid container>
        <Grid item xs={12} md={4} lg={4}>
          <CustomCard
            name={"Bare Metal"}
            details={BareMetal}
            btnText={"Add to Estimate"}
            btnOnClick={increaseBMCount}
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4}></Grid>
        <Grid item xs={12} md={4} lg={4}></Grid>
      </Grid> */}
    </div>
  );
}
