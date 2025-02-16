import '../css/Login.css';
import React, { Component } from 'react';
import { BrowseRouter as Router, Route, useNavigate, Link }from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconButton,Stack} from '@mui/material';

import signup from '../assests/signup.webp';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function Signup (){
   
 
const navigate=useNavigate();
        function checkdata  (){
        

        
            let username1=document.getElementById("username1").value;
            let password1=document.getElementById("password1").value;
            let Confirmpassword1=document.getElementById("Confirmpassword1").value;
            
           
             if(username1===""){
                alert("please enter username");
            }
            
            else if(password1===""){
                alert("please enter password");
            }
            else if(Confirmpassword1===""){
                alert("please enter Confirmpassword");
            }
            else if(password1!==Confirmpassword1){
              alert("Password not match");
            }
            else{
              
              navigate("/Linkpage");
            }
           
        }
        const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 

        return (
            
            <div className='bc'>
                <div>

               <Card id="cardsize">
                <Stack direction={"row"} spacing={25}>

                <Typography id="logininput">
               
                    <CardActions id='space'>

                        <img id="limg" src={signup} alt="e" />

                    </CardActions>
                

                </Typography>
                <Typography id="logininput">
                    <form id="loginform">

                        <Stack direction={"column"} spacing={4}>

                        <Typography id="logquote">Welcome Back!!!</Typography>
                        <TextField 
                           id="username1"
                            label="Username"
                            type="text"
                        />
                      
                        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             id="password1"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
             id="Confirmpassword1"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                        <button onClick={checkdata} id="logbut" type="button" class="btn btn-secondary">
                            <Link>SIGN UP</Link>
                            </button>

                        </Stack>

                    </form>
                </Typography>
                </Stack>
               </Card>
            </div>
                </div>
        );
    
}
 
export default Signup;