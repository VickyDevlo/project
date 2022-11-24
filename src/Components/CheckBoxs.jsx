import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { Box, Container } from "@mui/system";

const ColorCheckboxes = () => {
  return (
    <Container>

      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#1976d2",
              "&Mui-checked": {
                color: "#1976d2",
              },
            }}
            color="primary" 
          />
        }
        label="Primary"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#9c27b0",
              "&.Mui-checked": {
                color: "#9c27b0;",
              },
            }}
            color="secondary"
          />
        }
        label="secondary"
      />

      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#2e7d32",
              "&.Mui-checked": {
                color: "#2e7d32",
              },
            }}
            color="success"  
          />
        }
        label="success"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#ed6c02",
              "&.Mui-checked": {
                color: "#ed6c02",
              },
            }}
            color="warning"
          />
        }
        label="warning"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#d32f2f",
              "&.Mui-checked": {
                color: "#d32f2f",
              },
            }}
            color="error" 
          />
        }
        label="Danger"
      />
      
    </Container>
  );
};
export default ColorCheckboxes;
