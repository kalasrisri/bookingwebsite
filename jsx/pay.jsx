import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import '../css/pay.css';

function Pay(){
    const payment= useNavigate();
    function bill  (){
    
        let cardnumber1 = document.getElementById("cardnumber1").value;
        let cardholdername1=document.getElementById("cardholdername1").value;
        let expirydate1=document.getElementById("expirydate1").value;
        let cvv1=document.getElementById("cvv1").value;
        let billingaddress1=document.getElementById("billingaddress1").value;
        let citys1=document.getElementById("citys1").value;
        let states1=document.getElementById("states1").value;
        let pincode1=document.getElementById("pincode1").value;
        
       
         if(cardnumber1===""){
            alert("please enter cardnumber");
        }
        
        else if(cardholdername1===""){
            alert("please enter cardholdername");
        }
        
        else if(expirydate1===""){
            alert("please enter expirydate");
        }
        
        else if(cvv1===""){
            alert("please enter cvv");
        }
        
        else if(billingaddress1===""){
            alert("please enter billingaddress");
        }
        
        else if(citys1===""){
            alert("please enter city");
        }
        
        else if(states1===""){
            alert("please enter state");
        }
        
        else if(pincode1===""){
            alert("please enter pincode");
        }
        
        else{
          payment("/bus");
        }
    }

return(
    <div id="image">
<div className="container">
  <h1 className="h1">Payment Information</h1>
  <form  id="size">
        
    <div className="form-group">
      <label id="cardnumber" className="label" >Card Number</label>
      <input type="text" className="input" id="cardnumber1" name="cardnumber" placeholder="Enter your Cardnumber" />
    </div>
    <div className="form-group">
      <label  id="cardholdername"  className="label">Cardholder Name</label>
      <input
        type="text"
        id="cardholdername1"
        name="cardholdername"
        className="input"
        placeholder="Enter the Name"
      />
    </div>
    <div className="form-row">
      <div className="form-group">
        <label id="expirydate"  className="label">Expiry Date</label>
        <input
          type="text"
          id="expirydate1"
          className="input"
          name="expirydate"
          placeholder="MM/YY"
        />
      </div>
      <div className="form-group">
        <label id="cvv"  className="label">CVV</label>
        <input type="text" id="cvv1" name="cvv"className="input" placeholder={123} />
      </div>
    </div>
    <div className="form-group">
      <label  id="billingaddress" className="label" >Billing Address</label>
      <input
        type="text"
        id="billingaddress1"
        name="billingaddress"
        className="input"
        placeholder="Enter the billing Address"
      />
    </div>
    <div className="form-group">
      <label id="citys"  className="label">City</label>
      <input type="text"  id="citys1" name="citys" className="input" placeholder="City" />
    </div>
    <div className="form-row">
      <div className="form-group">
        <label id="states"  className="label">State</label>
        <input type="text" id="states1" name="states"className="input" placeholder="State" />
      </div>
      <div className="form-group">
        <label id="pincode" className="label">Pin Code</label>
        <input type="text"  id="pincode1" name="Pincode" className="input" placeholder="Pin Code" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary" id="button" onClick={bill}>Proceed To Pay </button>
  </form>
</div></div>
);
}
export default Pay;