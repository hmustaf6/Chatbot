import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options";
import Further from "../components/Further";

const config = {
  botName: "MeydIt Chatbot",
  initialMessages: [
    createChatBotMessage(
      `Hello. How may i help you today? Select from the following:`,
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "further",
      widgetFunc: (props) => <Further {...props} />,
    },
  ],
};

export default config;
