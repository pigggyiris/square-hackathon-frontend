import React from "react";
import Card from "components/card";
import flavorDefault from "assets/img/dashboards/flavorDefault.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TopFlavors = () => {
  const renderRating = (totalStars, activeStars) => {
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < activeStars) {
        stars.push(<AiFillStar className="text-fall-600" />);
      } else {
        stars.push(<AiOutlineStar className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-left">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Top 5 Flavor
        </h2>
      </div>
      <div className="mt-5 space-y-3 px-6">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={flavorDefault}
              alt="Flavor"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col justify-center">
              {" "}
              <span className="font-medium text-navy-700 dark:text-white">
                Mocha
              </span>
              <div className="mt-1 flex"> {renderRating(5, 4)}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopFlavors;
