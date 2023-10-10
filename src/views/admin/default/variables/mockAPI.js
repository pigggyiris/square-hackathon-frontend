// mockApi.js
//A mock API function that simulates the behavior of our future backend. 
//This function is asynchronous and return a hardcoded response.

export const mockSearchApi = async (query) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Hardcoded response
  return `The answer to your question "${query}" is: Yes, you should hire more people.`;
};
