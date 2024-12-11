import React from 'react';
import { useState, useEffect } from 'react';
import stmarys from '../images/stmarys.jpg';

const data = [
  {
    time: "Breakfast (7:00am-10:30am)",
    Monday: "Turkey Canadian Bacon, Hard Boiled Eggs",
    Tuesday: "Home Fries, Belgian Waffle",
    Wednesday: "Turkey Sausage Patties, Lyonnaise Potatoes",
    Thursday: "Texas French Toast, Hash Browns",
    Friday: "Pork Sausage Patties,Scrambled Eggs",
    Saturday: "None",
    Sunday: "None"
  },
  {
    time: "Lunch (11:00am-3:00pm)",
    Monday: "Cheese Pizza, Sausage Pizza",
    Tuesday: "Taco Bar, Cheese Quesadilla",
    Wednesday: "Chicken Briyani, Vegetable Barley Soup",
    Thursday: "Gyro Bar, Cheese Steaks",
    Friday: "Beer Battered Shrimp, Stuffed Peppers",
    Saturday: "None",
    Sunday: "None"
  },
  {
    time: "Dinner (4:15pm-8:00pm)",
    Monday: "Mediterranean Salad,Pineapple Black Fried Rice",
    Tuesday: "Pesto Baked Pork Chop, Crisply Roasted Potatoes",
    Wednesday: "Stir Fry, Vegan Lentil Loaf",
    Thursday: "Pasta Bar, Collard Greens",
    Friday: "Barbeque Chicken, Mushroom Bean Bourguignon",
    Saturday: "Sweet & Sour Pork, Sticky Rice",
    Sunday: "Seasoned Zucchini & Summer Squash,Macaroni & Cheese"
  }
];

export default function StMarysSchedule() {
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
      <h3>St Mary's Court Schedule</h3>
      <img src={stmarys} alt="St Mary's Court" className='image-size' />
      <table>
        <thead>
          <tr className="cell-color2">
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

