import React, { useState, useEffect } from "react";
import Card from "components/card";
import SearchBar from "./SearchBar";
import Progress from "components/progress";
import { getInventoryData } from "../services/currentInventoryService";
import fetchCurrentInventory from "../services/currentInventoryService";
import fetchRequiredInventory from "../services/requiredInventoryService";
import TaskCard from "./TaskCard";

const ComplexTable = () => {
  const [inventory, setInventory] = useState(null);
  const [requiredInventory, setRequiredInventory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentInventory = await fetchCurrentInventory();
      const requiredInv = await fetchRequiredInventory();
      setInventory(currentInventory);
      setRequiredInventory(requiredInv);
    };
    fetchData();
  }, []);

  const calculateProgress = (current, required) => {
    return (current / required) * 100;
  };

  const determineColor = (progress) => {
    return progress < 20 ? "red" : "fall";
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
          <div className="text-center text-fall-800">
            <p>Loading inventory data...</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ComplexTable;
