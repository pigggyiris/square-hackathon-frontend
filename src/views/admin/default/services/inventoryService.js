import { fetchInventory } from "../variables/mockInventoryAPI";

export const getInventoryData = async (query) => {
  try {
    const response = await fetchInventory(query);
    return response;
  } catch (error) {
    console.error('Error fetching inventory data:', error);
    return null;
  }
};