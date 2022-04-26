class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("maker")) {
      this.actionProvider.handleMaker();
    }

    if (lowercase.includes("client")) {
      this.actionProvider.handleClient();
    }

    if (lowercase.includes("customer support")) {
      this.actionProvider.handleCustomerSupport();
    }
  }
}

export default MessageParser;
