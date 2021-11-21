export default (url: string) => {
  let response: unknown = null;
  switch (url) {
    case "https://cat-fact.herokuapp.com/facts":
      response = [
        {
          text: "Fake text"
        }
      ];
      break;
  }
  return new Promise((resolve) => {
    resolve(response);
  });
};
