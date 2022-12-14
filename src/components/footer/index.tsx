import { Grid, Typography, Paper } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CSVLink } from "react-csv";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactBtn: {
      borderColor: "#9E9E9E",
      marginRight:'15px',
      color: "#9E9E9E",
      "&:hover": {
        backgroundColor: "#9E9E9E",
        color: "#fff",
      },
    },
    btnColor: {
      backgroundColor: "#2DCB73",
      
      color: "#fff",
      "&:hover": {
        backgroundColor: "#19A583",
        color: "#fff",
      },
    },
  })
);

const footer = (props: any) => {
  const classes = useStyles();

  const { finalTotalPrice, csvHeaders, csvData } = props;

  return (
    <div>
      <div
        style={{
          position: "fixed",
          left: "auto",
          bottom: 0,
          zIndex: 99,
          margin: "0",
          width: "100%",
          backgroundColor: "white",
          padding: "15px 50px",
        }}
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            marginLeft: "15px",
            borderBottom: "1px solid #1D572A",
          }}
        >
          QCloud Estimate
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: "15px",
              paddingLeft: "35px"
            }}
          >
            <div >
              {/* <Button
                variant="outlined"
                className={classes.contactBtn}
                // onClick={(e) => console.log("Contract Sales")}
              >
                Contract Sales
              </Button> */}
              {/* </div>
          <div> */}
              <Button variant="contained" className={classes.btnColor}>
                <CSVLink
                  headers={csvHeaders}
                  data={csvData}
                  filename="QCloud Price Estimate"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Export
                </CSVLink>
              </Button>
            </div>
          </div>
          <div
            style={{
              // display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: "36px",
              marginTop: "20px",
            }}
          >
            <div style={{display: 'flex'}}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  minWidth: "65px",
                  display: "inlineBlock",
                }}
              >
                Monthly
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  // alignItems: "end",
                  fontWeight: "bold",
                  minWidth: "150px",
                  textAlign: "right",
                  display: "inlineBlock",
                }}
              >
                $ {parseFloat(finalTotalPrice)?.toFixed(3)}
              </Typography>
            </div>
            {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "36px",
          }}
        > */}
            <div style={{display: 'flex'}}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  minWidth: "65px",
                  display: "inlineBlock",
                }}
              >
                Hourly
              </Typography>
              <Typography
                style={{
                  marginLeft: "15px",
                  fontWeight: "bold",
                  minWidth: "150px",
                  textAlign: "right",
                  display: "inlineBlock",
                }}
              >
                $ {(finalTotalPrice / 730).toFixed(3)}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
