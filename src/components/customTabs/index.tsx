import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles, createStyles } from "@mui/styles";
import { Box, Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabColor: {
      "& .MuiTabs-indicator": {
        backgroundColor: "#28A745",
        color: "#28A745",
      },
    },
  })
);

const CustomTabs = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabColor}
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          label="Products"
          style={{ color: "grey", fontWeight: "bold" }}
        />
        <Tab
          value="two"
          label="FAQs"
          style={{ color: "grey", fontWeight: "bold" }}
        />
      </Tabs>
    </Box>
  );
};
export default CustomTabs;
