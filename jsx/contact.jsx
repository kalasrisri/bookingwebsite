import React from "react";
import Layout from "../jsx/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import '../css/trip.css';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <div id="col">
      <Box sx={{ my: 2, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }} >
        <Typography variant="h4" color=" aliceblue">Contact Us</Typography>
        <p id="color">
        Several websites assist people holding e-tickets to check in online in advance of the twenty-four-hour airline restriction. These sites store a passenger's flight information and then when the airline opens up for online check-in the data is transferred to the airline and the boarding pass is emailed back to the customer. With this e-ticket technology, if a passenger receives his boarding pass remotely and is travelling without check-in luggage, he may bypass traditional counter check-in.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "#81daf0", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> Celeste@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 9665626540
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box></div>
    </Layout>
  );
};

export default Contact;