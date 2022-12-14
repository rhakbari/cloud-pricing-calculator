import * as React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../card/card";

export default function NetworkTab(props: any) {
  const { increaseEgressCount, increaseEipCount, increaseSlbCount } = props;
  let lbDetails: string =
    "Automatically distributes incoming traffic across multiple servers to balance the workload";
  let eipDetails: string =
    "Access your cloud using static public IP addresses and scalable bandwidths";
  let egressDetails: string =
    "Outbound data transfer. ";
  return (
    <div>
      <Grid container style={{ display: "flex" }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"Egress"}
            details={egressDetails}
            btnText={"Add to Estimate"}
            btnOnClick={increaseEgressCount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"Elastic IP"}
            details={eipDetails}
            btnText={"Add to Estimate"}
            btnOnClick={increaseEipCount}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <CustomCard
            name={"Smart Load-Balancer"}
            details={lbDetails}
            btnText={"Add to Estimate"}
            btnOnClick={increaseSlbCount}
          />
        </Grid>
      </Grid>
    </div>
  );
}
