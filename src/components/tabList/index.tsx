import React, { Suspense } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";

import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import ComputeTab from "./computeTab";
import NetworkTab from "./networkTab";
import StorageTab from "./storageTab";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
// import Loader from "../../../src/components/loader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabColor: {
      background: "#FAFAFC",
      "& .MuiTabs-indicator": {
        backgroundColor: "#1D572A",
        color: "#1D572A",
      },
      "&:active": {
        textColor: "#1D572A",
        color: "#1D572A",
      },
      "&.Mui-selected": {
        color: "#1D572A",
      },
    },
    tabMenu: {
      flexGrow: 1,
      bgcolor: "background.paper",
      display: "flex",
      height: 450,
      "@media only screen and (max-width: 767px)": {
        height: 'auto',
      },
    },
    tabPanel: {
      '& > div': {
        "@media only screen and (max-width: 767px)": {
          padding:'10px',
        },
      }
     
   
    },
  })
);
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
    className={classes.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const TabList = (props: any) => {
  const {
    increaseGPCount,
    increaseHP1Count,
    increaseHP2Count,
    increaseBMCount,
    increaseSsdCount,
    increaseHddCount,
    increaseEssCount,
    increaseOssCount,
    increaseEgressCount,
    increaseEipCount,
    increaseSlbCount,
  } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
        <Box
          className={classes.tabMenu}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            className={classes.tabColor}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              label="All Products"
              className={classes.tabColor}
              sx={{ display: "flex" }}
              {...a11yProps(0)}
            />
            <Tab
              icon={<ComputerIcon />}
              label="Compute"
              sx={{ display: "flex" }}
              className={classes.tabColor}
              {...a11yProps(1)}
            />
            <Tab
              className={classes.tabColor}
              icon={<StorageIcon />}
              label="Storage"
              {...a11yProps(2)}
            />
            <Tab
              className={classes.tabColor}
              icon={<SignalCellular4BarIcon />}
              label="Network"
              {...a11yProps(3)}
            />
          </Tabs>
          {value == 0 ? (
            <>
              <Box
                sx={{
                  background: "#E8E8F2",
                  overflow: "hidden",
                  overflowY: "auto",
                  width: value == 0 ? "100%" : "auto",
                }}
              >
              <TabPanel
                value = { value } index={0}>
                <span
                  
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      // marginBottom: "20px",
                      color: "#1D572A",
                    }}
                  >
                    <ComputerIcon sx={{ marginRight: "10px" }} />{" "}
                    <span style={{ fontSize: "20px" }}> Compute</span>
                  </span>
                  <ComputeTab
                    increaseGPCount={increaseGPCount}
                    increaseHP1Count={increaseHP1Count}
                    increaseHP2Count={increaseHP2Count}
                    increaseBMCount={increaseBMCount}
                  />

                  <span
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      fontWeight: "bold",
                      alignItems: "center",
                      // marginBottom: "20px",
                      color: "#1D572A",
                    }}
                  >
                    <StorageIcon sx={{ marginRight: "10px" }} />{" "}
                    <span style={{ fontSize: "20px" }}>Storage</span>
                  </span>
                  <StorageTab
                    increaseSsdCount={increaseSsdCount}
                    increaseHddCount={increaseHddCount}
                    increaseEssCount={increaseEssCount}
                    increaseOssCount={increaseOssCount}
                  />

                  <span
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      fontWeight: "bold",
                      alignItems: "center",
                      color: "#1D572A",
                    }}
                  >
                    <SignalCellular4BarIcon sx={{ marginRight: "10px" }} />{" "}
                    <span style={{ fontSize: "20px" }}> Network</span>
                  </span>

                  <NetworkTab
                    increaseEgressCount={increaseEgressCount}
                    increaseEipCount={increaseEipCount}
                    increaseSlbCount={increaseSlbCount}
                  />
                </TabPanel>
              </Box>
            </>
          ) : (
            <>
              <Box
                className={classes.tabPanel}
                sx={{
                  background: "#E8E8F2",
                  width: "100%",
                  overflow: "hidden",
                  overflowY: "auto",
                }}
              >
                <TabPanel value={value} index={1}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      // marginBottom: "10px",
                      color: "#1D572A",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <ComputerIcon sx={{ marginRight: "10px" }} />{" "}
                    <span style={{ fontSize: "20px" }}> Compute</span>
                  </Typography>

                  <ComputeTab
                    increaseGPCount={increaseGPCount}
                    increaseHP1Count={increaseHP1Count}
                    increaseHP2Count={increaseHP2Count}
                    increaseBMCount={increaseBMCount}
                  />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      // marginBottom: "20px",
                      color: "#1D572A",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <StorageIcon sx={{ marginRight: "10px" }} />{" "}
                    <span style={{ fontSize: "20px" }}>Storage</span>
                  </Typography>

                  <StorageTab
                    increaseSsdCount={increaseSsdCount}
                    increaseHddCount={increaseHddCount}
                    increaseEssCount={increaseEssCount}
                    increaseOssCount={increaseOssCount}
                  />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      // marginBottom: "20px",
                      color: "#1D572A",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <SignalCellular4BarIcon sx={{ marginRight: "10px" }} />
                    <span style={{ fontSize: "20px" }}> Network</span>
                  </Typography>
                  <NetworkTab
                    increaseEgressCount={increaseEgressCount}
                    increaseEipCount={increaseEipCount}
                    increaseSlbCount={increaseSlbCount}
                  />
                </TabPanel>
              </Box>
            </>
          )}
        </Box>
      {/* </Suspense> */}
    </>
  );
};
export default TabList;
