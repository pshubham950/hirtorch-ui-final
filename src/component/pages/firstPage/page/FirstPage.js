import { Box, Button } from "@mui/material";
// import { margin } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./FirstPage.css";
import FirstPageWords from "./FirstPageWords";
const FirstPage = () => {
  return (
    <Box>
      <div className="first_page_img">
        <div className="outerDiv">
          <FirstPageWords></FirstPageWords>
          <div className="buttonDiv">
            <Link to="/secondPage" style={{ textDecoration: "none" }}>
              <Button variant="contained">getting started</Button>
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default FirstPage;
