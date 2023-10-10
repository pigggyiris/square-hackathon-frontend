// searchService.js
// A service layer that will handle the actual API calls. 
//This is where we replace the mock API function with a real API call in the future.

import { mockSearchApi } from "../variables/mockAPI";

export const searchQuestion = async (query) => {
  // Replace this with a real API call in the future
  const response = await mockSearchApi(query);
  return response;
};
