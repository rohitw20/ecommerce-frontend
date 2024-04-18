import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../State/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center  ">
        <div className="flex py-3 items-center">
          <p className="">Don't have an account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5 "
            size="small"
            sx={{ color: "#9155fd" }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
