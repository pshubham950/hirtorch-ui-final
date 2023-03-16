import { Box, Button } from "@mui/material";
import React from "react";
import "./SecondPage.css";
import candidate_img from "../resource/undraw_Job_offers_re_634p (1).png";
import company_img from "../resource/undraw_Building_re_xfcm.png";
import admin_img from "../resource/undraw_Coding_re_iv62.png";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <Box>
      <Box className="my=40">
        <div className="background_img_candidate">
          <img src={candidate_img} className="icon_img" />
          <div>
            <p className="para">
              All our dreams can come true if we have the courage to pursue
              them. Lets go one step Ahead
            </p>
            <Link to="/secondPage/candidatelogin" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="button">
              Login for Candidate
            </Button>
            </Link>
          </div>
        </div>
      </Box>
      <Box>
        <div className="background_img_company">
          <img src={company_img} className="icon_img" />
          <div>
            <p className="para">Lets go one step Ahead</p>
            <Button variant="contained" className="button">
              Login for Company
            </Button>
          </div>
        </div>
      </Box>
      <Box>
        <div className="background_img_candidate">
          <img src={admin_img} className="icon_img" />
          <div>
            <p className="para">Lets go one step Ahead</p>
            <Button variant="contained" className="button">
              Login for Admin
            </Button>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default SecondPage;
