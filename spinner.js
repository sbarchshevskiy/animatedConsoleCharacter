const specialCharacter = ['\r|   ','\r/   ','\r-   ','\r\\   '];

const spinnerFunction = (input) => {
  let increment = 0;
  for (let elements in input) {
    increment = increment + 150;
    setTimeout(() => {
      process.stdout.write(elements);
    }, increment);
  }
};
spinnerFunction(specialCharacter);
