const fetchCurrentInventory = async () => {
  // Simulate fetching data from Square API
  return {
    'Coffee': {
      'Green coffee beans': 20,
      'Roasted coffee beans': 50,
      'Ground coffee': 25
    },
    'Milk': {
      'Whole milk': 15,
      '2% milk': 15
    },
    'Other Supplies': {
      'Paper towels': 10,
      'Napkins': 50
    }
  };
};

export default fetchCurrentInventory;