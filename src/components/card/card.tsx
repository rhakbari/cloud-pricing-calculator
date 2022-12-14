import * as React from "react";
import Card from "@mui/material/Card";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      margin: "15px",
      // minHeight: '40px',
      "@media only screen and (max-width: 767px)": {
        margin: "5px",
      },
    },
  })
);
const CustomCard = (props: any) => {
  const { name, details, btnText, btnOnClick } = props;
  const classes = useStyles();

  // const {increaseGPCount } = btnOnClick
  return (
    <div>
      <Card
        className={classes.cardStyle}
        // // minWidth: '450px',
        // // margin: "15px"
        // }}
      >
        <CardActionArea>
          <CardContent style={{ minHeight: '100px'}}>
            <Typography style={{fontSize: '1.2rem', fontWeight:'bold', color:'#1D572A'}}>{name}</Typography>
            <Typography style={{fontSize: '13px'}} color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              // console.log('hellow===', btnOnClick)
              btnOnClick();
            }}
            style={{ color: "#4EC88B",}}
          >
            {btnText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default CustomCard;
