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

const CandidateReg = () => {
  const [dobDate, setDobDate] = useState("");
  const handleDate = (event) => {
    setDobDate(event.target.value);
    console.log(dobDate);
  };
  const handleChange = (event) => {};
  return (
    <div>
      <Typography gutterBottom variant="h4" align="center" margin={5}>
        Candidate Registration
      </Typography>
      <Grid>

      </Grid>
      <Grid>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto"}}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12}item>
                  <TextField
                    variant="standard"
                    label="First Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Middle Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Last Name"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sx={{ mt: 1 }} item>
                  <TextField
                    variant="standard"
                    label=""
                    type="date"
                    fullWidth
                    required
                    onBlur={handleDate}
                  />
                </Grid>

                <Grid xs={12} sx={{ mt: 1 }} item>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      // value={}
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
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Email"
                    type="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    variant="standard"
                    label="Password"
                    type="password"
                    fullWidth
                    required
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
