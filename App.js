
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './jsx/Home';
import Login from './jsx/Login';
import Sign from './jsx/Sign';
import Signup from './jsx/Signup';
import Linkpage from './jsx/Link';
import SandelTable from './jsx/Homepage';
import Booking from './jsx/booking';
import Food from './jsx/food';
import About from './jsx/about';
import Contact from './jsx/contact';
import Trip from './jsx/trip';
import Bus from './jsx/bus';
import SearchAppBar from './jsx/Appbar';
import Pay from './jsx/pay';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/Sign'element={<Sign/>}></Route>
      <Route path='/Home'element={<Home/>}></Route>
      <Route path='/Signup'element={<Signup/>}></Route>
      <Route path='/SearchAppBar'element={<SearchAppBar/>}></Route>
      <Route path='/Linkpage'element={<Linkpage/>}></Route>
      <Route path='/SandelTable'element={<SandelTable/>}></Route>
      <Route path='/booking'element={<Booking/>}></Route>
      <Route path='/foods'element={<Food/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
      <Route path='/trip'element={<Trip/>}></Route>
      <Route path='/bus'element={<Bus/>}></Route>
      <Route path='/pay'element={<Pay/>}></Route>

    </Routes>
      </div>
  );
}

export default App;
