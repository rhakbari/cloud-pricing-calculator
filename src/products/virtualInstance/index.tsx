import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import CustomSelect from "../../components/Select";
import CustomTextField from "../../components/textField";
// import SavingOption from "../savingOption";
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

const VirtualInstance = (props: any) => {
  const {
    name,
    ecsData,
    bareMetal,
    modifyData,
    id,
    os,
    selectedQuantity,
    selectedSku,
    server,
  } = props;

  const classes = useStyles();

  const [sku, setSku] = useState<any>([]);
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [specs, setSpecs] = useState<any>([]);
  const [selectedSpecs, setSelectedSpecs] = useState<any>("");
  // const [quantity, setQuantity] = useState<number>();
  const [selectedServer, setSelectedServer] = useState<any>([]);

  useEffect(() => {
    if (os) {
      setOperatingSystem(os);
    }
  }, [os]);


  useEffect(() => {
    if (server) {
      setSelectedServer(server)
    }
  }, [server]);

  // useEffect(() => {
  //   if (selectedQuantity) {
  //     // setQuantity(selectedQuantity);
  //   }
  // }, [selectedQuantity]);



  const gpOsList = [
    { value: "windows", name: "Windows" },
    { value: "linux", name: "Linux" },
  ];

  const hpOsList = [{ value: "linux", name: "Linux" }]

  const [serverList, setServerList] = useState<any>([]);

  const nameCheck = (name: string) => {
    if (name.toLowerCase().includes("general")) return "gp";
    else if (name.toLowerCase().includes("hp1")) return "hp1";
    else if (name.toLowerCase().includes("hp2")) return "hp2";
    else if (name.toLowerCase().includes("bm")) return "bm";
  };

  useEffect(() => {
    if (ecsData?.length) {
      let ecs = ecsData?.filter(
        (item: any) =>
          item?.pricingType.toLowerCase() == nameCheck(name) &&
          item?.operatingSystem?.toLowerCase() == operatingSystem
      );
      let skuArr = ecs.map((item: any) => {
        return {
          id: item?.id,
          name: item?.resourceName,
          value: item?.id,
          price: parseFloat(item?.price)?.toFixed(3),
          resourceType: item?.resourceType,
          pricingType: item?.pricingType,
          operatingSystem: item?.operatingSystem,
        };
      });
      setSku(skuArr);
    }
  }, [ecsData, operatingSystem]);

  useEffect(() => {
    nameCheck(name);
  }, []);

  useEffect(() => {
    if (bareMetal?.length) {
      let bare = bareMetal?.filter(
        (item: any) => item?.pricingType.toLowerCase() == nameCheck(name)
      );
      let serType = bareMetal.map((item: any) => {
        return {
          id: item.id,
          name: item.resourceName,
          value: item.id,
          money: parseFloat(item?.price)?.toFixed(3),
          price:0, 
          resourceType: item.resourceType,
          pricingType: item.pricingType,
          operatingSystem: item.specification,
          specification: item.specification,
        };
      });

      setServerList(serType);
    }
  }, [bareMetal]);

  useEffect(() => {
    if (serverList.length) {
      let serSpecs = serverList.filter((item: any) => {
        return operatingSystem == item.id;
      });
      let finalSpecs = serSpecs.map((item: any) => {
        return {
          id: item.id,
          name: item.specification,
          value: item.id,
          price: parseFloat(item?.money)?.toFixed(3),
          resourceType: item.resourceType,
          pricingType: item.pricingType,
          specification: item.specification,
        };
      });
      setSpecs(finalSpecs);
    }
  }, [serverList, operatingSystem]);

  const handleChangeSpecs = (event: any) => {
    let product = specs.find((item: any) => item.id === event.target.value);

    modifyData({
      id,
      data: {
        [event.target.name]: event.target.value,
        skuName: product.name,
        unitPrice: product.price,
      },
    });
  };

  const handleChangeServer = (event: any) => {
    let product = serverList.find(
      (item: any) => item.id === event.target.value
    );
    if (modifyData)
      modifyData({
        id,
        data: {
          [event.target.name]: event.target.value,
          skuName: product.name,
          serverName: product.name,
          resourceType: product.resourceType,
          unitPrice: product.price,
        },
      });
  };

  const handleChangeOs = (event: any) => {
    if (modifyData) 
      modifyData({ id, data: { [event.target.name]: event.target.value } });
  };

  const handleChangeSku = (event: any) => {
    if (modifyData) {
      let product = sku.find((item: any) => item.id === event.target.value);
      modifyData({
        id,
        data: {
          [event.target.name]: event.target.value,
          skuName: product.name || product.specification,
          resourceType: product.resourceType,
          unitPrice: product.price,
        },
      });
    }
  };

  const handleChangeQuantity = (event: any) => {
    if (modifyData)
    debugger
      modifyData({ id, data: { [event.target.name]: event.target.value } });
    
  };

  return (
    <div>
      {/* <SavingOption /> */}

      <Grid container style={{ padding: "20px 50px" }}>
        <Typography style={{ fontWeight: "bold", marginBottom: "20px", fontSize:'14px'}}>
          Pay-As-You-Go (On Demand)
        </Typography>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid
            className={classes.textBoxes}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              style={{ marginRight: "10px" }}
            >
              <Box sx={{ minHeight: "70px" }}>
                <Typography style={{ fontWeight: "bold",fontSize:'14px' }}>
                  {nameCheck(name) == "bm" ? "Server Type" : "Operating System"}
                </Typography>
                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "13px",
                    color: "#888888",
                  }}
                >
                  {nameCheck(name) == "bm"
                    ? " Use a name search to find the most economical instance for your requirements."
                    : " Choose which operating system you'd like to run QCloud ECS instances on."}
                </Typography>
              </Box>
              <CustomSelect
                label={nameCheck(name) == "bm" ? "SKU" : "Operating System"}
                name={"os"}
                options={
                  nameCheck(name) == "bm"
                    ? serverList
                    : nameCheck(name) == "gp"
                    ? gpOsList
                    : hpOsList
                }
                styles={{ width: "100%" }}
                value={operatingSystem}
                onChange={
                  nameCheck(name) == 'bm' ? handleChangeServer :  handleChangeOs
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              style={{ marginRight: "10px" }}
            >
              <Box sx={{ minHeight: "70px" }}>
                <Typography style={{ fontWeight: "bold", fontSize:'14px' }}>
                  {nameCheck(name) == "bm" ? "Specifications" : "Instance Type"}
                </Typography>

                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "13px",
                    color: "#888888",
                  }}
                >
                  Use a name search to find the most economical instance for
                  your requirements.
                </Typography>
              </Box>

              <CustomSelect
                label={nameCheck(name) == "bm" ? "Specs" : "SKU (vCPU, RAM)"}
                options={nameCheck(name) == "bm" ? specs : sku}
                name={"sku"}
                styles={{ width: "100%" }}
                value={selectedSku}
                onChange={
                  nameCheck(name) == "bm" ? handleChangeSpecs : handleChangeSku
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box sx={{ minHeight: "70px" }}>
                <Typography style={{ fontWeight: "bold", fontSize:'14px' }}>Quantity</Typography>

                <Typography
                  style={{
                    marginBottom: "15px",
                    fontSize: "13px",
                    color: "#888888",
                  }}
                >
                  Enter the number of instances that you need.
                </Typography>
              </Box>

              <CustomTextField
                label="Quantity"
                value={selectedQuantity}
                key="quantity"
                name="quantity"
                styles={{ width: "100%" }}
                onChange={handleChangeQuantity}
                type={"number"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default VirtualInstance;
