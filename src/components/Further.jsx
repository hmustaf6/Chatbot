import React from "react";
import "./Options.css";

const Further = (props) => {
  const further = [
    {
      text: "How to signup as a Maker?",
      handler: props.actionProvider.handleQuery1,
      id: 4,
    },
    {
      text: "How to signup as a Client?",
      handler: props.actionProvider.handleQuery2,
      id: 5,
    },
    {
      text: "How to be both at the same time?",
      handler: props.actionProvider.handleQuery3,
      id: 6,
    },
  ];

  const buttonsMarkup = further.map((further) => (
    <button
      key={further.id}
      onClick={further.handler}
      className="further-button"
    >
      {further.text}
    </button>
  ));

  return <div className="further-container">{buttonsMarkup}</div>;
};

export default Further;
