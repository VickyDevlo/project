import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { green, orange, red, white } from "@mui/material/colors";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e2e2e",
      contrastText: "white",
    },

    secondary: {
      main: green[700],
    },
  },
});

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "#161719",
          color: "white",
          border: "1px solid black",
          mt: 6,
          ml: 123,
          height: "78vh",
          position: "relative",
          borderRadius:2
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography component="h1" variant="h5" fontWeight="bold">
            Register
          </Typography>
          <Typography color="grey" fontSize="14px">
            Sign up to continue to 2b Account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
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
                    right: "30px",
                    bottom: "335px",
                  }}
                />
                <TextField
                  variant="standard"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  defaultValue="Abc123"
                />
              </Grid>
              <Grid item xs={12}>
                <VisibilityOutlinedIcon
                  sx={{
                    position: "absolute",
                    right: "30px",
                    bottom: "270px",
                  }}
                />
                <TextField
                  variant="standard"
                  fullWidth
                  name="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  id="comfirmpassword"
                  defaultValue="Abc123"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="school/nstitute"
                  variant="standard"
                  fullWidth
                  id="School/Institute"
                  label="School/Institute"
                  defaultValue="ABC  Public School"
                />
                <KeyboardArrowDownIcon
                  sx={{
                    position: "absolute",
                    right: "230px",
                    bottom: "205px",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="city"
                  variant="standard"
                  fullWidth
                  id="city"
                  label="City"
                  defaultValue="New York"
                />
                <KeyboardArrowDownIcon
                  sx={{
                    position: "absolute",
                    right: "30px",
                    bottom: "205px",
                  }}
                />
              </Grid>
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
                }}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item color="typography.main" mt={3}>
                Already have an account?
                <Link href="#" variant="body2" color="secondary">
                  Sign In
                </Link>
                here
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
