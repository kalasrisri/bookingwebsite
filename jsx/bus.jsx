import React from 'react'
import '../css/bus.css';
import SearchAppBar from './Appbar';
import Home from './Home';
import { Link , useNavigate} from 'react-router-dom';

const Bus = () => {
  const places = useNavigate();
  function tripplace  (){
  
      let Roundtrip1 = document.getElementById("Roundtrip1").value;
      let take1=document.getElementById("take1").value;
      let To1 =document.getElementById("To1").value;
      let Return1=document.getElementById("Return1").value;
      let Department1=document.getElementById("Department1").value;
     
       if(Roundtrip1===""){
          alert("please select trip");
      }
      
      else if(take1===""){
          alert("please enter from");
      }
      
      else if(To1===""){
          alert("please enter to");
      }
      
      else if(Department1===""){
        alert("please enter departing");
      }
      
      
      else if(Return1===""){
          alert("please enter returning");
      }
      else{
        places("/pay");
      }
  }

  return (
    <div>
      <SearchAppBar/>
      <Home/>
    <div className='bodys'><div className="booking-form-box">
    <div className="radio-btn">
      <input
        type="radio"
        className="=btn"
        name="check"
        id='Roundtrip1'
        defaultChecked="checked"
      />
      <span>Roundtrip</span>
      <input type="radio" className="=btn" name="check" id='Roundtrip1' />
      <span>One way</span>
    </div>
    <hr />
    <div className="bookinf-form">
      <label>From</label>
      <input type="text" className="form-control" defaultValue="Chennai"  id='take1' />
      <label>To</label>
      <input type="text" className="form-control" defaultValue="Coimbatore" id='To1' />
      <div className="input-grp">
        <label>Departing</label>
        <input type="date" className="form-control select-date" id='Department1' />
      </div>
      <div className="input-grp">
        <label>Returning</label>
        <input type="date" className="form-control select-date" id='Return1'/>
      </div>
      <div className="input-grp">
        <label>Adults</label>
        <input type="number" className="form-control" id='Adult1' defaultValue={1} />
      </div>
      <div className="input-grp">
        <label>Children</label>
        <input type="number" className="form-control" id='Child1' defaultValue={0} />
      </div>
      <div className="input-grp">
        <label>Travel class</label>
        <select className="custom-select" id='Travel1'>
          <option value={1}>Non A/C-Seater</option>
          <option value={2}>A/C-Seater</option>
          <option value={3}>Non A/C-Sleeper</option>
          <option value={4}>A/C-Sleeper</option>
        </select>
      </div>
      <div className="input-grp">
          <button type="button" className="bus" onClick={tripplace}>
            SHOW BUSES
          </button>
        
      </div>
        
      
    </div>
  </div>
  </div>
  </div>
  )
}
export default Bus;