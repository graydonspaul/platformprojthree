import logo from '../logo.svg';
import '../App.css';
import Button from '../Button'

function MealTracking() {
  const handleClick = () => {
    alert('Button clicked!');
  };

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
    </div>
  );
}

export default MealTracking;