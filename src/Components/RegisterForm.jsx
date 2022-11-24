import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  Radio,
  Typography,
  InputLabel,
  TextField,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  RadioGroup,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  Link,
} from "@mui/material";
import { green } from "@mui/material/colors";

const RegisterForm = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    secondary: {
      main: green[900],
    },
  });

  const [value, setValue] = useState("Creator");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Card
        sx={{
          maxWidth: 480,
          position: "relative",
          left: 1010,
          top: 55,
          p: 2,
        }}
      >
        <CardHeader
          title="Register"
          subheader="Sign up to continue to 2b Account"
        />
        <CardContent>
          <Typography fontSize="14px">Register as</Typography>

          <FormControl>
            <RadioGroup
              onChange={handleChange}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center ",
                position: "relative",
                top: -32,
                left: 100,
              }}
              value={value}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
                disabled
              />

              <FormControlLabel
                value="creator"
                control={<Radio />}
                label="Creator"
                checked
              />
            </RadioGroup>
          </FormControl>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="standard"
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue="Kate"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                variant="standard"
                fullWidth
                id="lastName"
                label="Last Name"
                defaultValue="Micheal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                defaultValue="micheal.kate@gmail.com"
              />
            </Grid>

            <Grid item xs={12}>
              <VisibilityOutlinedIcon
                sx={{
                  position: "absolute",
                  right: 34,
                  bottom: 230,
                }}
              />
              <TextField
                variant="standard"
                fullWidth
                name="password"
                label="Password"
                type="text"
                id="password"
                defaultValue="Abc123"
              />
            </Grid>

            <Grid item xs={12}>
              <VisibilityOutlinedIcon
                sx={{
                  position: "absolute",
                  right: 34,
                  bottom: 294,
                }}
              />
              <TextField
                variant="standard"
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="text"
                id="comfirmpassword"
                defaultValue="Abc123"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">
                  School/Institute
                </InputLabel>
                <Select defaultValue={10} label="School/Institute">
                  <MenuItem value={10}>ABC Public School</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select defaultValue={10} label="School/Institute">
                  <MenuItem value={10}>New York</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: 100,
                  textTransform: "none",
                  width: 150,
                  bgcolor: "#2e2e2e",
                  color: "white",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#2e2e2e",
                    boxShadow: "none",
                  },
                }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item color="typography.main" mt={3}>
                Already have an account?
                <Link
                  href="#"
                  sx={{
                    color: "green",
                    padding: 1,
                  }}
                >
                  Sign In
                </Link>
                here
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default RegisterForm;
