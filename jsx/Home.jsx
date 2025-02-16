import React from 'react';
import { Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import {  blueGrey } from '@mui/material/colors';


function Home(){
      return (
        <div >
        <Stack direction={"row"} spacing={5} padding={3} color={blueGrey}>

              <Link to="/Linkpage"><b>Home</b></Link>
              <Link to="/SandelTable"><b>Hotel</b></Link>
              <Link to='/booking'><b>Rooms</b></Link>
              <Link to='/foods'><b>Food</b></Link>
              <Link to='/bus'><b>Bus</b></Link>
              <Link to='/about'><b>About</b></Link>
              <Link to='/contact'><b>Contact</b></Link>
              </Stack>
              </div>
      );
};
export default Home;