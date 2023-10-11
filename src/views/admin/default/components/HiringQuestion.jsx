import React from "react";
import Card from "components/card";
import Chatbot from "react-chatbot-kit";
import config from "../services/chatbot/config";
import MessageParser from "../services/chatbot/MessageParser";
import ActionProvider from "../services/chatbot/ActionProvider";
import SearchBar from "./SearchBar";

const HiringQuestion = ({
  userQuestion,
  setUserQuestion,
  handleSearch,
  answer,
}) => {
  return (
    <Card>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Card>
  );
};

export default HiringQuestion;
