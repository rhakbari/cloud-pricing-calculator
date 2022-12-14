import React from "react";
import Box from "@mui/material/Box";
import NoSsr from "@mui/base/NoSsr";
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  loader: {
    width: "48px",
    height: " 48px",
    borderRadius: "50%",
    display: "inline-block",
    borderTop: "4px solid #FFF",
    borderRight: "4px solid transparent",
    // boxSizing: "border Box",
    animation: "rotation 1s linear infinite",

    "&::after": {
      content: "",
      boxSizing: "border-box",
      position: "absolute",
      left: 0,
      top: 0,
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      borderBottom: "4px solid #FF3D00",
      borderLeft: "4px solid transparent",
    },
  },
  "@keyframes rotation": {
    " 0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

const Loader: React.FC = () => {
  const classes = useStyles();
  return (
    <NoSsr>
      <Box
        height="100%"
        display="flex"
        flex={1}
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      >
        {/* <CircularProgress /> */}
        {/* <div className={classes.loader}></div> */}
        <CircularProgress size={20} sx={{color: '1D572A'}} />
      </Box>
    </NoSsr>
  );
};
export default Loader;