class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage(
      "Hello friend. Type in if you'r maker or client?",
      {
        widget: "options",
      }
    );
    this.addMessageToState(message);
  };

  handleMaker = () => {
    const message = this.createChatBotMessage("Fantastic. You're a Maker!", {
      widget: "further",
    });

    this.addMessageToState(message);
  };

  handleClient = () => {
    const message = this.createChatBotMessage("Fantastic. You're a Client!", {
      widget: "further",
    });

    this.addMessageToState(message);
  };

  handleCustomerSupport = () => {
    const message = this.createChatBotMessage(
      "Okay. Reaching out to customer support may take some time for you to recieve some response!"
    );

    this.addMessageToState(message);
  };

  handleQuery1 = () => {
    const message = this.createChatBotMessage(
      "Okay, signing up can be access through the navigation bar for both maker & client!"
    );

    this.addMessageToState(message);
  };

  handleQuery2 = () => {
    const message = this.createChatBotMessage(
      "Okay, signing up can be access through the navigation bar for both maker & client!"
    );

    this.addMessageToState(message);
  };

  handleQuery3 = () => {
    const message = this.createChatBotMessage(
      "Once you have signed up, in your acount settings there is an option to sign up for the other part as well, thank you for reaching out to chatbot!"
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
