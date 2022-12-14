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

const ElasticVolume = (props: any) => {
  const { name, volumeData, modifyData, id, quantity, sku } = props;
  const [volume, setVolume] = useState<any>([]);
  const classes = useStyles();

  const nameCheck = (name: string) => {
    if (name.toLowerCase().includes("ssd")) return "ssd";
    else if (name.toLowerCase().includes("hdd")) return "hdd";
    else if (name.toLowerCase().includes("oss")) return "oss";
    else if (name.toLowerCase().includes("ess")) return "ess";
  };

  useEffect(() => {
    if (volumeData.length) {
      let vol = volumeData.filter(
        (item: any) => item?.pricingType.toLowerCase() == nameCheck(name)
      );

      let volumeArr = vol.map((item: any) => {
        return {
          id: item.id,
          name: item.resourceName,
          value: item.id,
          price: parseFloat(item?.price)?.toFixed(3),
          resourceType: item.resourceType,
          pricingType: item.pricingType,
        };
      });
      setVolume(volumeArr);
    }
  }, [volumeData]);

  const handleChangeVolume = (event: any) => {
    let product = volume.find((item: any) => item.id === event.target.value);
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
                  {"Storage Type"}
                </Typography>
                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "14px",
                    color: "#888888",
                  }}
                >
                  {
                    "Use a name search to find the most economical storage for your requirements."
                  }
                </Typography>
              </Box>
              <CustomSelect
                label="SKU"
                name="sku"
                value={sku}
                options={volume}
                styles={{ width: "100%" }}
                onChange={handleChangeVolume}
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
                  {"Enter the number of storage that you need."}
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

export default ElasticVolume;
