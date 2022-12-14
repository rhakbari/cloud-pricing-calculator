import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CustomSelect from "../../components/Select";
import CustomTextField from "../../components/textField";
// import SavingOption from "../savingOption";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textBoxes: {
      display: "flex",
      flexDirection: "row",

      "@media only screen and (max-width: 767px)": {
        display: "flex",
        flexDirection: "column",
      },
    },
  })
);

const Network = (props: any) => {
  const { name, networkData, modifyData, id, quantity, sku } = props;
  const classes = useStyles();
  const [network, setNetwork] = useState<any>([]);

  const nameCheck = (name: string) => {
    if (name.toLowerCase().includes("lb")) return "loadbalancer";
    else if (name.toLowerCase().includes("egress")) return "egress";
    else if (name.toLowerCase().includes("eip")) return "elasticip";
  };

  const nameLabel = (name: string) => {
    if (name.toLowerCase().includes("lb")) return "LB Type";
    else if (name.toLowerCase().includes("data")) return "Data Type";
    else if (name.toLowerCase().includes("eip")) return "EIP Type";
  };

  useEffect(() => {
    if (networkData?.length) {
      let vol = networkData.filter(
        (item: any) => item?.pricingType.toLowerCase() == nameCheck(name)
      );

      let networkArr = vol.map((item: any) => {
        return {
          id: item.id,
          name: item.resourceName,
          value: item.id,
          price: parseFloat(item?.price)?.toFixed(3),
          resourceType: item.resourceType,
          pricingType: item.pricingType,
        };
      });
      setNetwork(networkArr);
    }
  }, [networkData]);

  const handleChangeNetwork = (event: any) => {
    let product = network.find((item: any) => item.id === event.target.value);
    if (modifyData)
      modifyData({
        id,
        data: {
          [event.target.name]: event.target.value,
          skuName: product.name,
          resourceType: product.resourceType,
          unitPrice: product.price,
        },
      });
  };

  const handleChangeQuantity = (event: any) => {
    if (modifyData)
      modifyData({ id, data: { [event.target.name]: event.target.value } });
  };

  return (
    <div>
      {/* <SavingOption /> */}

      <Grid container style={{ padding: "20px 50px" }}>
        <Typography style={{ fontWeight: "bold", marginBottom: "20px" }}>
          Pay-As-You-Go (On Demand)
        </Typography>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid
            className={classes.textBoxes}
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            // }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              style={{ marginRight: "10px" }}
            >
              <Box sx={{ minHeight: "90px" }}>
                <Typography style={{ fontWeight: "bold" }}>
                  {nameCheck(name) == "loadbalancer"
                    ? "Select the required load balancer type"
                    : nameCheck(name) == "elasticip"
                    ? "Select the required elastic IP address type”"
                    : "Select the required data type"}
                </Typography>
                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "14px",
                    color: "#888888",
                  }}
                >
                  {nameCheck(name) == "loadbalancer"
                    ? "Choose which Loadbalancer you'd like to run QCloud ECS instances on."
                    : "Choose which network you'd like to run QCloud ECS instances on."}
                </Typography>
              </Box>
              <CustomSelect
                label={nameLabel(name)}
                name="sku"
                options={network}
                value={sku}
                styles={{ width: "100%" }}
                onChange={handleChangeNetwork}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ minHeight: "90px" }}>
                <Typography style={{ fontWeight: "bold" }}>
                  {"Quantity"}
                </Typography>
                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "14px",
                    color: "#888888",
                  }}
                >
                  {"Enter the number of network that you need."}
                </Typography>
              </Box>
              <CustomTextField
                label="Quantity"
                name="quantity"
                onChange={handleChangeQuantity}
                value={quantity}
                type={"number"}
                styles={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Network;
