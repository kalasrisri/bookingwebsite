import React, { useState } from 'react';
import '../css/Link.css';
import SearchAppBar from './Appbar';
import hous from '../assests/hous.jpg';
import Home from './Home';
import {Link,useNavigate} from 'react-router-dom';
import { Stack} from '@mui/material';
const SandelTable = () => {
  const navigate=useNavigate();
  function checkdat  (){
        

        
    let checkin=document.getElementById("checkin").value;
    let checkout=document.getElementById("checkout").value;
    let guest=document.getElementById("guest").value;
    
   
     if(checkin===""){
        alert("please enter checkindate");
    }
    
    else if(checkout===""){
        alert("please enter checkoutdate");
    }
    else if(guest===""){
        alert("please enter guest");
    }
    
    else{
      navigate("/booking");
    }
  }
        return (
            <div>
                <div>

                <SearchAppBar/>
                <Home/>
             
            </div>
            
            <img style={{width:"100%",height:"13.2cm"}} src={hous} alt="BigCo Inc. logo"/>
            <card>
            <div>
        <h2 id='hotel'>Book a Hotel</h2>
        <p id='hoteles'>Welcome to celeste house-a great alpine chalet in the best switzerland celeste resort</p>
        <form  >
        <Stack direction={"row"} spacing={10} id='spac'>
          <div >
            <label>Check-in Date: </label>
            <input type="date"  name="checkin " id='checkin'/>
          </div>
          <div >
            <label >Check-out Date:</label>
            <input type="date" name='checkout' id='checkout' />
          </div>
          <div >
            <label >Guests:</label>
            <input
              type="number"
              name='guest'
              min="1"
              max="10"
              id='guest'
              />
          </div>
          <button type="submit" id='butt' onClick={checkdat}>
            Search</button>
          </Stack>
        </form>
      </div>

            </card>
            </div>
        );
    }

 
export default SandelTable;