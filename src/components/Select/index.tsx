import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LabelOff } from "@mui/icons-material";

export default function CustomSelect(props: any) {
  const { label, options, styles, onChange, value, name } = props;
  const [eventChange, setEventChange] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setEventChange(event.target.value as string);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth sx={{ color: "#6D6D6D" }}>
        <InputLabel id="demo-simple-select-label" sx={styles}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          label={label}
          sx={styles}
          onChange={onChange}
        >
          {options?.map((item: any) => (
            <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
