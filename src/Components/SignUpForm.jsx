import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import { Checkbox, FormControlLabel } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: "white",
    },
    secondary: {
      main: blue[900],
    },
  },
});

const SignUpForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 450,
            height: 500,
            border: "2px solid #ececec",
            borderRadius: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "orange" }}>
            <AssignmentIndIcon />
          </Avatar>

          {/* <Typography component="h1" variant="h5" color="primary">
            Sign in
          </Typography> */}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 4 }}
          >
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // alignItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Grid>
                <Link
                  href="#"
                  variant="body2"
                  color="secondary"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid
                item
                sx={{
                  margin: "0 auto",
                }}
              >
                Don't have an account?
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    ml: 1,
                  }}
                >
                  SignUp
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignUpForm;
