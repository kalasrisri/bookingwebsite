import React from "react";
import '../css/trip.css';
import { Link } from "react-router-dom";

function Trip(){
  const navigate =() => {
    alert('Make payment!!!');  

}
    return(
        <div className="body">
          <div className="td_img">
    <div className="main-table">
    <main className="table">
    <section className="table_headers">
      <h1>BUS DETAILS</h1>
    </section>
    <section className="table_body">
      <brs></brs>
      <table>
        <thead>
          <tr>
            <th>Travels Name</th>
            <th>Image</th>
            <th>Schedule</th>
            <th>Bus Type</th>
            <th>Fare</th>
            <th>Boarding Point</th>
            <th>Dropping Point</th>
            <th>Amenities</th>
            <th>Luggage Weight</th>
            <th>View Seats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parveen Travels</td>
            <td>
              <img
                src="https://1.bp.blogspot.com/-djOAc9Pvg04/VSORykR7frI/AAAAAAAAACM/qbUYNR0yh6U/s1600/SAM_1062.jpg"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>9.30pm-6.30am</td>
            <td>
              <p>Scania</p>
            </td>
            <td>
              <strong>950</strong>
            </td>
            <td>Koyambedu</td>
            <td>Gandhipuram</td>
            <td>Snacks+Water Bottle</td>
            <td>30kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>KPR Travels</td>
            <td>
              <img
                src="https://i2.wp.com/www.motorindiaonline.in/wp-content/uploads/2013/10/KPN-pic-2.jpg"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>9.00pm-6.00am</td>
            <td>
              <p>Volvo</p>
            </td>
            <td>
              <strong>
                800
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Gandhipuram</td>
            <td>Water Bottle</td>
            <td>30kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>VRL Travels</td>
            <td>
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.pAvbZ5zh_OXx2zNnNUGDTQAAAA&pid=Api&P=0&h=180"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>10.00pm-7.00am</td>
            <td>
              <p>Volvo</p>
            </td>
            <td>
              <strong>
                850
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Ukkadam</td>
            <td>Water Bottle+Juice</td>
            <td>25kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>YBM Travels</td>
            <td>
              <img
                src="https://tse3.mm.bing.net/th?id=OIP._r_L3ZAVV7qno2__tfu_oAHaEK&pid=Api&P=0&h=180"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>11.00pm-7.30am</td>
            <td>
              <p>Benz</p>
            </td>
            <td>
              <strong>
                1100
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Gandhipuram</td>
            <td>Snacks+Water Bottle</td>
            <td>40kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>SRS Travels</td>
            <td>
              <img
                src="https://i.pinimg.com/originals/16/34/e1/1634e1aef4605ac5e1d4f6abc4878867.jpg"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>11.30pm-6.30am</td>
            <td>
              <p>Scania</p>
            </td>
            <td>
              <strong>
                1350
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Gandhipuram</td>
            <td>Snacks+Water Bottle</td>
            <td>20kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>Asian Express</td>
            <td>
              <img
                src="https://live.staticflickr.com/1886/42842228740_cf26d1007e.jpg"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>10.30pm-5.30am</td>
            <td>
              <p>Scania</p>
            </td>
            <td>
              <strong>
                1000
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Gandhipuram</td>
            <td>Snacks+Water Bottle</td>
            <td>35kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
          <tr>
            <td>Evacay</td>
            <td>
              <img
                src="https://3.bp.blogspot.com/-J_a7Koujj94/Wn09e_eLApI/AAAAAAAA6s0/CGuegVSw0-ALTjtlnUPThTk5SSzT8Eg0ACLcBGAs/s1600/26225654568_918b4f47bb_o.jpg"
                alt=""
                width={50}
                height={50}
              />
            </td>
            <td>10.45pm-5.45am</td>
            <td>
              <p>Scania</p>
            </td>
            <td>
              <strong>
                1250
                <strong />
              </strong>
            </td>
            <td>Koyambedu</td>
            <td>Ukkadam</td>
            <td>Snacks+Water Bottle</td>
            <td>25kg/per</td>
            <td>
            <Link to="/pay">View</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table></table>
    </section>
  </main>
  <button id='back' onClick={navigate}>
  <Link to='/pay'>Book Now</Link>
  </button>
  </div>
        </div>
        </div>
    )
}
export default Trip;