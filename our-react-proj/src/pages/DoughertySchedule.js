import React from 'react';
import { useState, useEffect } from 'react';
import doughall from '../images/dougherty.jpg';

const data = [
  {
    time: "Breakfast (7:00am-10:30am)",
    Monday: "Scrambled Egg Whites, Pork Sausage Link",
    Tuesday: "Belgian Waffle, Turkey Bacon",
    Wednesday: "Turkey Sausage Patties, Lyonnaise Potatoes",
    Thursday: "Scrambled Eggs, Scrambled Egg Whites",
    Friday: "Hard Boiled Eggs, Pancakes",
    Saturday: "Bacon & Egg Croissant, Spinach Feta Pastry",
    Sunday: "Nova Cinnamon Roll, Assorted Cereal"
  },
  {
    time: "Lunch (11:00am-3:00pm)",
    Monday: "Noodle Bar Action Station, Hearty Beef Vegetable Soup",
    Tuesday: "Taco Bar, Chicken Potstickers",
    Wednesday: "Florentine Stuffed Shells, Calypso Rice and Beans",
    Thursday: "Monte Cristo Sandwich, Pepperoni Pizza",
    Friday: "Chicken Potstickers, Cauliflower with Red Peppers",
    Saturday: "Pork Sausage Link, Minestrone Soup",
    Sunday: "Grilled Cheese Sandwich, Vegetable Frittata"
  },
  {
    time: "Dinner (4:15pm-8:00pm)",
    Monday: "Roasted Shrimp, Portabella Steak Sandwich",
    Tuesday: "London Broil, Broccoli Rabe with Garlic",
    Wednesday: "Asian Vegetable Blend, Buffalo Cauliflower",
    Thursday: "Tailgate Meatball Panini, Country Mashed Potatoes",
    Friday: "Spaghetti & Meatballs, Sauteed Spinach with Roasted Red Peppers",
    Saturday: "Roasted Brussels Sprouts with Garlic, Roast Beef",
    Sunday: "Crispy Dijon Chicken, Carolina Gold Rice with Roasted Garlic"
  }
];

export default function DoughertySchedule() {
  const [currentMeal, setCurrentMeal] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours(); // Get current time

    if (currentTime >= 7 && currentTime < 11) {
      setCurrentMeal("Breakfast is open");
    } 
    else if (currentTime >= 11 && currentTime < 15) {
      setCurrentMeal("Lunch is open");
    } 
    else if (currentTime >= 16 && currentTime < 20) {
      setCurrentMeal("Dinner is open");
    } 
    else {
      setCurrentMeal("Sorry. We're closed");
    }
  }, []);

  return (
    <div>
      <h3>Dougherty Court Schedule</h3>
      <img src={doughall} alt="Dougherty Court" className='image-size'/>
      <table>
        <thead>
          <tr className="cell-color1">
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, key) => (
            <tr key={key}>
              <td>{food.time}</td>
              <td>{food.Monday}</td>
              <td>{food.Tuesday}</td>
              <td>{food.Wednesday}</td>
              <td>{food.Thursday}</td>
              <td>{food.Friday}</td>
              <td>{food.Saturday}</td>
              <td>{food.Sunday}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="font">{currentMeal}</p>
    </div>
  );
}
