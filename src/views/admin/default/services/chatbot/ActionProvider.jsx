import React from "react";
import axios from "axios";
import { BASE_URL } from "config";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const currentMonth = new Date().getMonth() + 1;

  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHiringPlan = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/salesInfo/hiringSuggestion/${currentMonth}`); 
      const aiResponse = response.data; 

      const botMessage = createChatBotMessage(aiResponse);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching hiring plan data:", error);
    }
  };

  const handleSkipForThisMonth = () => {
    const botMessage = createChatBotMessage(
      "Ok, let me know if you want the plan in the future. Have a nice day!"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleHiringPlan, 
            handleSkipForThisMonth,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
