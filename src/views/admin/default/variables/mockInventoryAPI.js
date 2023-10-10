export const fetchInventory = (query) => {
  // Simulate an API call based on the query
  // For demonstration, we return a fixed inventory object
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        "Coffee": {
          "Green coffee beans": "100 pounds",
          "Roasted coffee beans": "50 pounds",
          "Ground coffee": "25 pounds",
          "Coffee filters": "100 boxes",
          "Coffee cups": "5000 cups",
          "Creamer": "10 gallons",
          "Sugar": "10 pounds",
        },
        "Milk": {
          "Whole milk": "20 gallons",
          "2% milk": "15 gallons",
          "Skim milk": "10 gallons",
        },
        "Other Supplies": {
          "Paper towels": "10 rolls",
          "Napkins": "100 packs",
          "Straws": "1000 straws",
          "Cups lids": "5000 lids",
        },
      });
    }, 1000);
  });
};
