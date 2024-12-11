import React, { useState } from 'react';
import logo from './villanova_logo.jpg';
import './App.css';
import Button from './Button';

import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

// Import new images
import grilledCheese from './images/grilledCheese.png';
import pasta from './images/pasta.png';
import sushi from './images/sushi.png';
import choolaahBowl from './images/choolaahBowl.png';

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

const center = { lat: 40.03769759888606, lng: -75.34253558465446 };

function App() {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(expandedImage === image ? null : image);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Meal Plan and Points: 100 meals, 1000 points</p>
        <div>
          <Button text="Hangry Meter" onClick={() => alert('Button clicked!')} />
        </div>
      </header>

      <div className="map-container">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Lunch Specials Section */}
      <div className="lunch-specials">
        <h2 className="section-title">This Week's Lunch Specials</h2>
        <div className="info-section">
          {[grilledCheese, choolaahBowl, sushi, pasta].map((image, index) => (
            <div className="info-column" key={index}>
              <img
                src={image}
                alt={`Special ${index + 1}`}
                className={`info-image ${expandedImage === image ? 'expanded' : ''}`}
                onClick={() => handleImageClick(image)}
              />
              <h3>
                {index === 0
                  ? 'Bartley Hall'
                  : index === 1
                  ? 'Cafe Nova'
                  : index === 2
                  ? 'Driscoll Hall'
                  : 'Drosdick Hall'}
              </h3>
              <p>
                {index === 0
                  ? 'Tuesday & Thursday: Enjoy a delicious grilled cheese special.'
                  : index === 1
                  ? 'Wednesday: Fresh Indian flavors served from 12PM-2PM.'
                  : index === 2
                  ? 'Wednesday: Enjoy sushi specials from 11AM-2PM.'
                  : 'Wednesday: Taste of Napolitano Brothers\' pasta specialties.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
