import { Box, Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../style/CandidateLogin.css";

const CandidateLogin = () => {
  return (
    <Box>
      <div className="candidate_page_img">
        <div className="outer_border">
          <h1 style={{ margin: 10 }}>Candidate Login</h1>
          <form>
            <FormControl>
              <div className="text_box">
                <TextField
                  required
                  type="email"
                  id="standard-required"
                  label="Email"
                  variant="standard"
                  inputProps={{
                    style: {
                      width: "300px",
                    },
                  }}
                />
              </div>
              <div>
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  variant="standard"
                  inputProps={{
                    style: {
                      width: "300px",
                    },
                  }}
                />
              </div>
              <div className="button_div">
                <Button type="submit" variant="contained" className="button">
                  Login
                </Button>
              </div>
              <div>
                <Link
                  to="/secondPage/candidateReg"
                  style={{ textDecoration: "none" }}
                >
                  <p className="para">New User Click here</p>
                </Link>
              </div>{" "}
            </FormControl>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default CandidateLogin;
