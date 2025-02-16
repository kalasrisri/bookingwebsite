import '../css/Sign.css';
import React, { Component } from 'react';
import { BrowseRouter as Router, Route, useNavigate, Link }from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconButton,Stack} from '@mui/material';
import imag from '../assests/imag.webp';

function Sign (){

    const navigate=useNavigate();
    function checkinfo1  (){

        let firstname2=document.getElementById("firstname2").value;
        let password2=document.getElementById("password2").value;
        let emailid2=document.getElementById("emailid2").value;
        let age=document.getElementById("age").value;
        let gender=document.getElementById("gender").value;
        
       
         if(firstname2===""){
            alert("please enter firstname");
        }
        
        
        else if(emailid2===""){
            alert("please enter emailid");
        }
        
        else if(password2===""){
            alert("please enter password");
        }
        else if(age===""){
            alert("please enter age");
        }
        
        else if(gender===""){
            alert("please enter gender");
        }
        
        else{
        navigate("/Linkpage");
        }
    }
            return (
                      <div className='bc'>
                     <div>

               <Card id="cardsize">
                <Stack direction={"row"} spacing={30}>

                <Typography id="logininput">
               
                    <CardActions>

                        <img id="limg" src={imag} alt="e" />

                    </CardActions>
                

                </Typography>
                <Typography id="logininput">
                    <form class="loginform">

                        <Stack direction={"column"} spacing={2}>

                        <Typography id="logquote">WELCOME</Typography>
                        <TextField 
                           id="firstname2"
                            label="Firstname"
                            type="text"
                        />
                      
                        <TextField 
                           id="emailid2"
                            label="Email"
                            type="text"
                            
                        />
                        <TextField 
                           id="password2"
                            label="Password"
                            type="text"
                            
                        />
                        <TextField 
                           id="age"
                            label="Age"
                            type="text"
                            
                        />
                        <div>
                            <label id='gender'>Gender</label>
                            <input type='radio'name='gender'id='gender'></input>
                                <label id='gender'>Male</label>
                            <input type='radio'name='gender'id='gender'></input>
                                <label id='gender'>Female</label>
                            <input type='radio'name='gender'id='gender'></input>
                                <label id='gender'>Others</label>
                                
                        </div>
                        <button onClick= {checkinfo1}  id="logbut" type="submit" class="btn btn-secondary" >SIGN UP</button><br></br>

                        </Stack>

                    </form>
                    <Typography>
                    <Stack direction={"row"} spacing={5}>

                        <Typography id='gender'><ins>Already have an account</ins></Typography>
                        <Typography>
                           <Link to="/" ><b>Log in</b></Link>
                           </Typography>
                    </Stack>
                    </Typography>
                </Typography>
                </Stack>
               </Card>
            </div>
                </div>
        );
    
}
 
export default Sign;