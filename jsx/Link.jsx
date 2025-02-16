import * as React from 'react';
import '../css/Link.css';
import SearchAppBar from './Appbar';
import hoteli from '../assests/hoteli.png';
import Home from './Home';
import { Route, Routes ,Link} from 'react-router-dom';
import { Typography } from '@mui/material';


function Linkpage() {
    
  
    
        return (
            <div>
                <div>

                <SearchAppBar/>
                <Home/>
             
            </div>
            
            <img style={{width:"100%",height:"13.2cm"}} src={hoteli} alt="BigCo Inc. logo"/>
            <div id='head'>

            <Typography >
                <h2>Enjoy Your Dream Vacation</h2>
                <p id='heading'>We are an architecture agency that will help you design a modern and minimalist dream building.Booking is an arduous task where user is flooded with variety of options and our task to make the process of finding relevant content as seamless as possible.</p>
            </Typography>
            <Typography>
                <button id='but'>
                    <Link to='/SandelTable'>BOOK NOW</Link>
                </button><br></br>
                <button id='backbut'>
                    <Link to='/'>Back</Link>
                </button>
            </Typography>
            </div>
                </div>
        );
    }

 
export default Linkpage;