import * as React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../card/card";

export default function StorageTab(props: any) {
  const {
    increaseSsdCount,
    increaseHddCount,
    increaseEssCount,
    increaseOssCount,
  } = props;

  let evs_ssd_details =
    "High-Performance Solid-State Drive (SSD) block storage designed for intensive workloads.";
  let evs_hdd_details = "Optimized for large streaming workloads";
  let ess_details = "Highest performance storage volumes";
  let obj_store_details =
    "Object Storage Service (OSS) is a stable, secure, efficient, and easy-to-use cloud storage service.";
  return (
    <div>
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"EVS - SSD"}
            details={evs_ssd_details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseSsdCount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"EVS - HDD"}
            details={evs_hdd_details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseHddCount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"ESS (For HP compute only)"}
            details={ess_details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseEssCount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"Object Store Service"}
            details={obj_store_details}
            btnText={"Add to Estimate"}
            btnOnClick={increaseOssCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}
