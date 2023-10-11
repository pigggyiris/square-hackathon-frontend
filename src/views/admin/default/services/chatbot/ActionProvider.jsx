import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHiringPlan = () => {
    // Call Google AI Vertex here and get the response
    const aiResponse = "This is a placeholder for Google AI Vertex response.";

    const botMessage = createChatBotMessage(aiResponse);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
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
