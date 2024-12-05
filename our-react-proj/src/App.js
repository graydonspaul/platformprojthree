import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router components
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import MealTracking from './pages/MealTracking';
import ApiMap from './pages/ApiMap';
import PopUp from './pages/PopUp';
import { Link } from 'react-router-dom';  // Import Link for navigation

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>  {/* Link to HomePage */}
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>  {/* Link to Schedule */}
            </li>
            <li>
              <Link to="/meal-tracking">Meal Tracking</Link>  {/* Link to MealTracking */}
            </li>
            <li>
              <Link to="/api-map">Api Map</Link>  {/* Link to MealTracking */}
            </li>
            <li>
              <Link to="/pop-up">Pop Up</Link>  {/* Link to MealTracking */}
            </li>
          </ul>
        </nav>

        <Routes> {/* Define routes */}
          <Route path="/" element={<Home />} />  {/* HomePage route */}
          <Route path="/schedule" element={<Schedule />} />  {/* Schedule route */}
          <Route path="/meal-tracking" element={<MealTracking />} />  {/* MealTracking route */}
          <Route path="/api-map" element={<ApiMap />} />  {/* ApiMap route */}
          <Route path="/pop-up" element={<PopUp />} />  {/* ApiMap route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;



// import logo from './logo.svg';
// import './App.css';
// import Button from './Button';

// function App() {
  // const handleClick = () => {
  //   alert('Button clicked!');
  // };

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Meal Plan and Points: 100 meals, 1000 points 
  //       </p>
  //       <div>
  //         <Button text="Hangry Meter" onClick={handleClick} />
  //       </div>
  //     </header>
  //   </div>
  // );
// }

// export default App;
