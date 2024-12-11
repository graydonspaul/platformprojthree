import React from 'react';
import { useState, useEffect } from 'react';
import donhall from '../images/donahue.jpg';

const data = [
  {
    time: "Breakfast (7:00am-10:30am)",
    Monday: "Pork Sausage Link, Potatoes O'Brien",
    Tuesday: "Hard Boiled Eggs, Home Fries, Pancakes",
    Wednesday: "Belgian Waffle, Chicken Sausage Patty",
    Thursday: "Biscuit, Texas French Toast",
    Friday: "Pancakes, Hash Browns",
    Saturday: "Bacon & Egg Croissant, Tater Tot Puffs",
    Sunday: "Spinach Feta Pastry, Nova Cinnamon Roll"
  },
  {
    time: "Lunch (11:00am-3:00pm)",
    Monday: "Chicken Noodle Soup, Tikka Masala",
    Tuesday: "Basmati Rice, Chicken soup",
    Wednesday: "Chicken Potstickers, Edamame Dumplings",
    Thursday: "Pork Belly Bao Bun, Korean Fried Rice",
    Friday: "Vegan Mediterranean Soup, Fish Chowder",
    Saturday: "Pork Sausage Link, Cheese Blintz with Berry Compote",
    Sunday: "Crinkle Cut French Fries, Grilled Cheese Sandwich"
  },
  {
    time: "Dinner (4:15pm-8:00pm)",
    Monday: "Glazed Ham, Tuscan Mushroom",
    Tuesday: "Vegan General Tso, Sticky Rice",
    Wednesday: "Pot Roast, Basmati Rice",
    Thursday: "Cheese Quesadilla, Cheese Pizza",
    Friday: "Veggie Lo Mein, Meatballs in Tomato Sauce",
    Saturday: "Herb Baked Chicken, Stuffed Peppers",
    Sunday: "Chicken, Vegetable Samosa"
  }
];

export default function DonahueSchedule() {
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
      <h3>Donahue Court Schedule</h3>
      <img src={donhall} alt="Donahue Court" />
      <table>
        <thead>
          <tr className="cell-color">
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
