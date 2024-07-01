import figlet from "figlet";

/**
 * setup figlet
 */
const setupFiglet = () => {
  figlet("Nest Quick Setup", (err, data) => {
    if (err) {
      throw new Error(`Error occured: ${err}`);
      return;
    }
    console.log(data);
  });
};

/**
 * import and run functions
 */
const main = () => {
  setupFiglet();
};

main();
