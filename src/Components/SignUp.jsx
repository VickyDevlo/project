import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";

const theme = createTheme();

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "2px solid  #ececec",
            borderRadius: 2,
            height: 600,
            width: 500,
            margin: "0 auto",
          }}
        >
          {/* <Avatar sx={{ bgcolor: blue[900], marginTop:2, width:77}}>Google</Avatar> */}
          <Grid marginTop={5}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography component="h1" variant="h6">
              to continue to YouTube
            </Typography>
          </Grid>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, p: 5, minWidth: 500 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email or phone"
                />
              </Grid>
              <Grid container>
                <Grid item marginTop={1}>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      margin: 2,
                      color: "#1976d2",
                    }}
                  >
                    Forgot email?
                  </Link>
                </Grid>
              </Grid>
              <Grid marginTop={4}>
                <Grid container margin={2} color="text.secondary" fontSize={15}>
                  Not your computer? Use Guest mode to sign in privately.
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                    }}
                  >
                    learn more
                  </Link>
                </Grid>
              </Grid>
              <Grid width={"100%"} margin={2}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      color: "#1976d2",
                    }}
                  >
                    Create account
                  </Link>
                  <Button variant="contained">
                    <Link
                      href="#"
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        textTransform: "none",
                      }}
                    >
                      Next
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
