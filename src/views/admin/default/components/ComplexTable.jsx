import React, { useState, useEffect } from "react";
import Card from "components/card";
import SearchBar from "./SearchBar";
import Progress from "components/progress";
import { getInventoryData } from "../services/inventoryService";

const ComplexTable = () => {
  const [query, setQuery] = useState("");
  const [inventory, setInventory] = useState(null);

  const handleSearch = async () => {
    const data = await getInventoryData(query);
    setInventory(data);
  };

  return (
    <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />

      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        {inventory ? (
          <table className="w-full">
            <thead>
              <tr className="bg-fall-50">
                {inventory &&
                  Object.keys(inventory).map((category, index) => (
                    <th
                      key={index}
                      className={`px-12 text-center ${
                        index === 0 ? "rounded-l" : ""
                      } ${index === 2 ? "rounded-r" : ""}`}
                    >
                      {category}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(inventory).map((items, index) => (
                  <td key={index} className="px-12 align-top">
                    <div className="mt-4">
                      <ul>
                        {Object.entries(items).map(([item, quantity], i) => (
                          <li key={i}>
                            <div className="mb-4">
                              <div>{item}</div>
                              <Progress value={50} color="fall" />
                              <div className="mt-1 text-sm">{quantity}</div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="text-center text-fall-800">
            <p>Ask me about an inventory plan 😀</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ComplexTable;
