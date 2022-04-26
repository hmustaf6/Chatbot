import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Maker?",
      handler: props.actionProvider.handleMaker,
      id: 1,
    },
    {
      text: "Client?",
      handler: props.actionProvider.handleClient,
      id: 2,
    },
    {
      text: "Reach out to customer support?",
      handler: props.actionProvider.handleCustomerSupport,
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
