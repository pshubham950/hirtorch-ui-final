import { Box, Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/CandidateLogin.css";

const CandidateLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value)
  };
  const handlePassword = (event) =>{
    setPassword(event.target.value)
  }
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
      email : email,
      password : password 
    }

    axios.post("http://localhost:4000/home/candidate/login",data)
    .then((response)=>{
      console.log(response)

    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <Box>
      <div className="candidate_page_img">
        <div className="outer_border">
          <h1 style={{ margin: 10 }}>Candidate Login</h1>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <div className="text_box">
                <TextField
                  required
                  type="email"
                  id="standard-required"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={handleEmail}
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
                  value={password}
                  onChange={handlePassword}
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
