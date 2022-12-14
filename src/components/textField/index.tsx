import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import FormControl, { useFormControl } from '@mui/material/FormControl';

export default function CustomTextField(props: any) {
  const { value, label, styles, type, onChange, name, key } = props;
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      
      <TextField
        id="outlined-basic"
        label={label}
        name={name}
        value={value ? parseInt(value) :''}
        onChange={onChange}
        variant="outlined"
        type={type}
        sx={styles}
        inputProps={{ min: 0, step:'1'}}
      />
    </Box>
  );
}
