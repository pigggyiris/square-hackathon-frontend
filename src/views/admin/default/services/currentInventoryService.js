const fetchCurrentInventory = async () => {
  // Simulate fetching data from Square API
  return {
    'Coffee': {
      'Green coffee beans': 20,
      'Roasted coffee beans': 50,
      'Ground coffee': 25,
      'Coffee filters':30
    },
    'Milk': {
      'Whole milk': 35,
      "2% Milk": 15
    },
    'Other Supplies': {
      'Paper towels': 20,
      'Napkins': 50
    }
  };
};

export default fetchCurrentInventory;