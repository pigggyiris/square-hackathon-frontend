import { createChatBotMessage } from "react-chatbot-kit";
import HiringPlanOptions from "./HiringPlanOptions";
import BotAvatar from "./BotAvatar";
const botName = "Bean";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi!  I'm ${botName}! 😀 `),
    createChatBotMessage("Ready for the hiring plan next month?", {
      widget: "hiringPlanOptions",
    }),
  ],

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#eeeed7",
    },
    chatButton: {
      backgroundColor: "#000000",
    },
  },
  widgets: [
    {
      widgetName: "hiringPlanOptions",
      widgetFunc: (props) => <HiringPlanOptions {...props} />,
    },
  ],
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
};

export default config;
