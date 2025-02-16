import '../css/Login.css';
import React, { Component } from 'react';
import { BrowseRouter as Router, Route, useNavigate, Link }from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { IconButton,Stack} from '@mui/material';

import loginimg from '../assests/logimg1.webp';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



function Login (){
   
 
const navigate=useNavigate();
        function checkdata  (){
        

        
            let username=document.getElementById("username").value;
            let password=document.getElementById("password").value;
            
           
             if(username===""){
                alert("please enter username");
            }
            
            else if(password===""){
                alert("please enter password");
            }
            
            else{
              navigate("/Sign");
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
               
                    <CardActions>

                        <img id="limg" src={loginimg} alt="e" />

                    </CardActions>
                

                </Typography>
                <Typography id="logininput">
                    <form id="loginform">

                        <Stack direction={"column"} spacing={4}>

                        <Typography id="logquote">Good To See You Again</Typography>
                        <TextField 
                           id="username"
                            label="Username"
                            type="text"
                            autoComplete="current-password"
                        />
                      
                        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
             id="password"
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
                        <button onClick={checkdata} id="logbut" type="button" class="btn btn-secondary">LOGIN</button><br></br>

                        </Stack>

                    </form>
                    <Typography>
                    <Stack direction={"row"} spacing={10}>

                        <Typography onclick={navigate} type="button">
                          <Link to="/Sign">Don't have an account?</Link>
                          </Typography>
                        <Typography><Link to="/Signup">Forget password?</Link></Typography>

                    </Stack>

                    </Typography>
                </Typography>
                </Stack>
               </Card>
            </div>
                </div>
        );
    
}
 
export default Login;