import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        userData
      );

      console.log("this is data", response.data);
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              className="w-full"
              sx={{
                padding: ".8rem 0",
                bgcolor: "#9155FD",
                ":hover": {
                  bgcolor: "#ab89e9",
                },
              }}
              size="large"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center  ">
        <div className="flex py-3 items-center">
          <p className="">Already have an account?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5 "
            size="small"
            sx={{ color: "#9155fd" }}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
