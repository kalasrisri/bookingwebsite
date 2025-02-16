import React from "react";
import Layout from "../jsx/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 3,
          textAlign: "center",
          p: 1,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:400px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <div id="colu">
        <Typography variant="h4" >Welcome To Celeste Ticket Booking</Typography>
        <p>
        E-tickets in the airline industry were devised in about 1994,[1] and have now largely replaced the older multi-layered paper ticketing systems. 
        Since 1 June 2008, it has been mandatory for IATA members to use e-ticketing. 
        Where paper tickets are still available, some airlines charge a fee for issuing paper tickets.

When a reservation is confirmed, the airline keeps a record of the booking in its computer reservations system. Customers can print out or may be provided with a copy of a e-ticket itinerary receipt which contains the record locator or reservatio

        </p>
        <br />
        <p>
        An official ticket number (including the airline's 3-digit ticketing code,[2] a 4-digit form number, a 6-digit serial number, and sometimes a check digit)
Carriage terms and conditions (or at least a reference to them)
Fare and tax details, including fare calculation details and some additional data such as tour codes. The exact cost might not be stated, but a "fare basis" code will always identify the fare used.
A short summary of fare restrictions, usually specifying only whether change or refund are permitted but not the penalties to which they are subject
Form of payment
Issuing office
Baggage allowance
</p>
      </div>
      </Box>
    </Layout>
  );
};

export default About;