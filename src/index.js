wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'hello':
      while (true) {
        // To infinity, and beyond.
      };
    default:
      throw new Error('Method not found.');
  }
});
