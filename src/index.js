import figlet from "figlet";

/**
 * display ASCII art using figlet
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
 * get user data to setup the project
 */
const getData = () => {};

/**
 * import and run functions
 */
const main = () => {
  setupFiglet();
  getData();
};

main();
