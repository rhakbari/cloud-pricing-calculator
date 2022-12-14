import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function SavingOption() {
  return (
    <div>
      <Grid style={{ padding: "30px 50px" }}>
        <FormControl>
          <Typography
            id="demo-row-radio-buttons"
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            fontSize={20}
          >
            Saving Options
          </Typography>
          <Typography
            id="demo-row-radio-buttons"
            fontSize={12}
            sx={{ color: "#888888" }}
          >
            Save up to 72% on pay-as-you-go prices with 1-year or 3-year
            Reserved Virtual Machine Instances. Reserved Instances are great for
            applications with steady-state usage and applications that require
            reserved capacity.
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: '#28A745',
                    },
                  }}
                />
              }
              label="1 Year Reserved"
            />
            <FormControlLabel
              value="male"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: '#28A745',
                    },
                  }}
                />
              }
              label="3 Year Reserved"
            />
            <FormControlLabel
              value="other"
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: '#28A745',
                    },
                  }}
                />
              }
              label="On Demand"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </div>
  );
}
