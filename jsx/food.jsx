import React from "react";
import '../css/food.css';
import { BrowseRouter as Router, Route, useNavigate, Link }from 'react-router-dom';


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  function checkdata  (){
	  
	  
	  
	  let Name=document.getElementById("Name").value;
	  let Email=document.getElementById("Email").value;
	  let Comment=document.getElementById("Comment").value;
	  
	  
	  if(Name===""){
		  alert("please enter name");
		}
		
		else if(Email===""){
			alert("please enter Email");
		}
		else if(Comment===""){
			alert("please enter Comment");
		}
		
		else{
			alert("Thank you!!!");
		}
	}
	
	function foods() {
	  const menuToggle = document.querySelector(".menuToggle");
	  const navigation = document.querySelector(".navigation");
	  menuToggle.classList.toggle("active");
	  navigation.classList.toggle("active");
	}
  export default function Food (){
     return(
         <div>

<header>
<Link to = "/SandelTable" class="logo">Food<span>.</span></Link>
<div class="menuToggle" onclick="toggleMenu();"></div>
<ul class="navigation">
  <li><a href="#banner" onclick="toggleMenu();">Home </a></li>
  <li><a href="#about" onclick="toggleMenu();">About </a></li>
  <li><a href="#menu" onclick="toggleMenu();">Menu</a></li>
  <li><a href="#expert" onclick="toggleMenu();">Expert </a></li>
  <li><a href="#testimonials" onclick="toggleMenu();">Testimonials</a></li>
  <li class="conta"><a href="#contact" onclick="toggleMenu();">Contact </a></li>
 </ul>
</header>
<section class="banner" id="banner">
 <div class="content">
     <h2> Always Choose Food</h2>
	 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
	 <a href="#" class="btn"> Our Menu</a>
  </div>  
</section>
<section class="about" id="about">
  <div class="row">
    <div class="co150">
	  <h2 class="titleText"><span>A</span>bout Us</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	   <br></br><br></br>
       <p>
	   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>

      </div>
	  <div class="co150">
	   <div class="imgBx">
	      <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		 </div>
		</div>
	</div>
</section>
<section class="menu" id="menu">
 <div class="title">
     <h2 class="titleText">Our <span>M</span>enu</h2>
	 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
     <div class="content">
	   <div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/2116090/pexels-photo-2116090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Special Salad</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Momos</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
		  </div>
        <div class="text">
         <h3> Dosa</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Pizza</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Pasta</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Chawmin</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Samosa</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/2282528/pexels-photo-2282528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Burger</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/1683546/pexels-photo-1683546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
		  </div>
        <div class="text">
         <h3> Ice Creams</h3>
        </div>
        </div>
		<div class="box">
	     <div class="imgBx">
		   <img src="https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		  </div>
        <div class="text">
         <h3> Dessert</h3>
        </div>
        </div>
      </div>
       <div class="title">
       <a href="#" class="btn">View all</a>
	</div>	  

</section>
<section class="expert" id="expert">
   <div class="title">
     <h2 class="titleText">Our Kitchen <span>E</span>xpert</h2>
	 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
     <div class="content">
	   <div class="box">
	     <div class="imgBx">
		  <img src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
		 </div>
		 <div class="text">
		   <h3> Someone Famous</h3>
		 </div>
		 </div>
		 <div class="box">
	     <div class="imgBx">
		  <img src="https://images.pexels.com/photos/3785693/pexels-photo-3785693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		 </div>
		 <div class="text">
		   <h3> Someone Famous</h3>
		 </div>
		 </div>
		 <div class="box">
	     <div class="imgBx">
		  <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		 </div>
		 <div class="text">
		   <h3> Someone Famous</h3>
		 </div>
		 </div>
		 <div class="box">
	     <div class="imgBx">
		  <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		 </div>
		 <div class="text">
		   <h3> Someone Famous</h3>
		 </div>
		 </div>
		</div>
</section>
<section class="testimonials" id="testimonials">

       <div class="title white">
         <h2 class="titleText">They <span>S</span>aid About Us</h2>
	        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	    </div>
	   <div class="content">
	    <div class="box">
	    <div class="imgBx">
	    <img src="https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		</div>
		<div class="text">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		</p>
		<h3>Someone Famous</h3>
		</div>
	    </div>
	   <div class="box">
	   <div class="imgBx ">
	    <img src="https://images.pexels.com/photos/1657611/pexels-photo-1657611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		</div>
		<div class="text">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		</p>
		<h3>Someone Famous</h3>
		</div>
	    </div>
	    <div class="box">
	    <div class="imgBx">
	    <img src="https://images.pexels.com/photos/8467827/pexels-photo-8467827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
		</div>
		<div class="text">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		</p>
		<h3>Someone Famous</h3>
		</div>
        </div>
        </div>
</section>
<section class="contact" id="contact">
<div class="title">
     <h2 class="titleText"> <span>C</span>ontact Us</h2>
	 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
	<div class="contactForm">
	  <h3> Send Message</h3>
	  <div class="inputBox">
	  <input type="text" id="Name" placeholder="Name"/>
	  </div>
	   <div class="inputBox">
	   <input type="text" id="Email" placeholder="Email"/>
	  
	  </div>
	   <div class="inputBox">
	  
	  <textarea id="Comment" placeholder="Comment"></textarea>
	  </div>
	   <div class="inputBox">
	  <input type="submit" onClick ={checkdata} value="Send"/>
	  </div>
	</div>

</section>
 <div class="copyrightText">
   <p>All rights are reserved</p>
   <button>
	<Link to="/booking"> Back </Link>
   </button>
  </div>
        </div>
     );
  }