import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
  Card,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";

const CandidateReg = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    //console.log(firstName);
  };
  const handleMiddleName = (event) => {
    setMiddleName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleDate = (event) => {
    setDob(event.target.value);
  };
  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSumbmit = (event) => {
    event.preventDefault();
      const data ={
        // same name as per json string
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        candidateEmail: email,
        candidateAddhar: "6565659666",
        candidateUserName : username,
        "candidatePassword": password
      };
      
      axios
      .post("http://localhost:4000/home/candidate/save",data)
      .then((response) =>{
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setDob("");
      setGender("")
      setEmail("");
      setPassword("");
      setUsername("");
  };




  return (
    <div>
      <Typography gutterBottom variant="h4" align="center" margin={5}>
        Candidate Registration
      </Typography>
      <Grid></Grid>
      <Grid>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSumbmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="First Name"
                    variant="standard"
                    fullWidth
                    required
                    value={firstName}
                    onChange={handleFirstName}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Middle Name"
                    variant="standard"
                    fullWidth
                    required
                    value={middleName}
                    onChange={handleMiddleName}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Last Name"
                    fullWidth
                    required
                    value={lastName}
                    onChange={handleLastName}
                  />
                </Grid>
                <Grid xs={12} sx={{ mt: 1 }} item>
                  <TextField
                    label="Date of Birth"
                    variant="standard"
                    margin="normal"
                    selected={dob}
                    fullWidth
                    required
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={dob}
                    onChange={handleDate}
                  />
                </Grid>

                <Grid xs={12} sx={{ mt: 1 }} item>
                  <FormControl>
                    <FormLabel id="gen">Gender</FormLabel>
                    <RadioGroup
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="f"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="m"
                        control={<Radio />}
                        label="Male"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="User Name "
                    fullWidth
                    required
                    value={username}
                    onChange={handleUsername}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Email"
                    type="email"
                    fullWidth
                    required
                    value={email}
                    onChange={handleEmail}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={handlePassword}
                  />
                </Grid>
                <Grid xs={12} sx={{ mt: 3 }} item>
                  <Button type="submit" variant="contained" fullWidth>
                    submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default CandidateReg;
