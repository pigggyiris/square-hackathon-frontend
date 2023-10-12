import React from "react";

const fetchRequiredInventory = async () => {
  // Simulate fetching data from Google AI API
  return {
    Coffee: {
      "Green coffee beans": 200,
      "Roasted coffee beans": 100,
      "Ground coffee": 50,
    },
    Milk: {
      "Whole milk": 40,
      "2% milk": 30,
    },
    "Other Supplies": {
      "Paper towels": 20,
      Napkins: 200,
    },
  };
};
export default fetchRequiredInventory;
