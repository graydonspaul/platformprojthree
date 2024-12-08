import logo from './villanova_logo.jpg';
import './App.css';
import Button from './Button';

import {useJsApiLoader, GoogleMap} from '@react-google-maps/api'

const SkeletonText = ({ width, height }) => {
  return (
    <div 
      style={{
        width: width || '100%',
        height: height || '1em',
        backgroundColor: '#e0e0e0',
        animation: 'shimmer 1.5s infinite linear',
        borderRadius: '4px',
      }}
    />
  );
};

const center = {lat:40.03769759888606, lng: -75.34253558465446}

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  // Coordinates Villanova University: 40.03769759888606, -75.34253558465446

  if (!isLoaded) {
    return <SkeletonText />
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meal Plan and Points: 100 meals, 1000 points 
        </p>
        <div>
          <Button text="Hangry Meter" onClick={handleClick} />
        </div>
      </header>
      
      <div class="map-container">
        {/*Google maps box goes here */}
        <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%', height:'100%'}}>
          {/* displaying makers or directions */}
        </GoogleMap>
      </div>
    </div>
  );
}

export default App;
