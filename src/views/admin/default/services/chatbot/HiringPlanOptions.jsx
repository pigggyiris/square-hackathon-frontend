import React, { useState } from "react";
import UserAvatar from "./UserAvatar";

const HiringPlanOptions = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (id, handler) => {
    handler();
    setSelectedOption(id);
  };

  const options = [
    {
      text: "Yes, tell me more about it!",
      id: 1,
      handler: () => props.actionProvider.handleHiringPlan(),
    },
    {
      text: "No, I'll skip for this month.",
      id: 2,
      handler: () => props.actionProvider.handleSkipForThisMonth(),
    },
  ];

  return (
    <div className="flex items-center justify-end">
      <div className="p-4">
        {options.map((option) =>
          selectedOption === null || selectedOption === option.id ? (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id, option.handler)}
              className="m-2 rounded-full bg-fall-100 py-2 px-4 text-fall-950 hover:bg-fall-400"
            >
              {option.text}
            </button>
          ) : null
        )}
      </div>
      <UserAvatar />
    </div>
  );
};

export default HiringPlanOptions;
