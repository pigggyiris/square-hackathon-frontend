import React, { useState, useEffect } from "react";
import Card from "components/card";
import Progress from "components/progress";
import fetchCurrentInventory from "../services/currentInventoryService";
import Loading from "./Loading"; 
import { v4 as uuidv4 } from "uuid";

import axios from "axios";
import { BASE_URL } from "../../../../config";


const ComplexTable = ({ setTodos, todos }) => {
  const [inventory, setCurrentInventory] = useState(null);
  const [requiredInventory, setRequiredInventory] = useState(null);
  const currentMonth = 10;

  const transformData = (data) => {
    return {
      Coffee: {
        "Green coffee beans": data["greenCoffeeBeans"] || 0,
        "Roasted coffee beans": data["roastedCoffeeBeans"] || 0,
        "Ground coffee": data["groundCoffee"] || 0,
        "Coffee filters": data["coffeeFilters"] || 0,
      },
      Milk: {
        "Whole milk": data["wholeMilk"] || 0,
        "2% Milk": data["2%Milk"] || 0,
      },
      "Other Supplies": {
        "Paper towels": data["paperTowel"] || 0,
        Napkins: data["napkins"] || 0,
      },
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentInventoryResponse = await fetchCurrentInventory();
        console.log("Current Inventory Data:", currentInventoryResponse.data);

        const requiredInventoryResponse = await axios.get(
          `${BASE_URL}/v1/salesInfo/inventories/${currentMonth}`
        );
        console.log("Required Inventory Data:", requiredInventoryResponse.data);

        const transformedRequiredInventory = transformData(
          requiredInventoryResponse.data
        );

        setCurrentInventory(currentInventoryResponse);

        setRequiredInventory(transformedRequiredInventory);
        console.log(
          "Transformed Required Inventory Data:",
          transformedRequiredInventory
        );
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (inventory && requiredInventory) {
      const newTodos = [];
      Object.entries(inventory).forEach(([category, items]) => {
        Object.entries(items).forEach(([item, current]) => {
          const required = requiredInventory[category][item] || 0;
          const progress = calculateProgress(current, required);
          const color = determineColor(progress);

          if (color === "red") {
            // Check if this todo already exists, avoid dups
            const existingTodo = todos.find(
              (todo) => todo.task === `Refill the inventory of ${item}`
            );

            if (!existingTodo) {
              newTodos.push({
                id: uuidv4(),
                task: `Refill the inventory of ${item}`,
                completed: false,
                isEditing: false,
              });
            }
          }
        });
      });

      if (newTodos.length > 0) {
        const mergedTodos = [...todos, ...newTodos];
        setTodos(mergedTodos);
      }
    }
  }, [inventory, requiredInventory]);

  const calculateProgress = (current, required) => {
    // ensure progress is capped at 100%
    const progress = (current / required) * 100;
    return progress <= 100 ? progress : 100;
  };

  const determineColor = (progress) => {
    if (progress <= 20) {
      return "red";
    } else if (progress <= 80) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        {inventory && requiredInventory ? (
          <table className="w-full">
            <thead>
              <tr className="bg-fall-50">
                {Object.keys(inventory).map((category, index) => (
                  <th key={index} className="px-12 text-center">
                    {category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(inventory).map((category, index) => (
                  <td key={index} className="px-12 align-top">
                    <div className="mt-4">
                      <ul>
                        {Object.entries(inventory[category]).map(
                          ([item, current], i) => {
                            const required =
                              requiredInventory[category][item] || 0;
                            const progress = calculateProgress(
                              current,
                              required
                            );
                            const color = determineColor(progress);
                            return (
                              <li key={i}>
                                <div className="mb-4">
                                  <div>{item}</div>
                                  <Progress value={progress} color={color} />
                                  <div className="mt-1 text-right text-sm">{`${current} / ${required}`}</div>
                                </div>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center text-fall-800 mt-20">
            <Loading /> 
          </div>
        )}
      </div>
    </Card>
  );
};

export default ComplexTable;
