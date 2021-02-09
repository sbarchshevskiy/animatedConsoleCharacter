const specialCharacter = ['\r|   ','\r/   ','\r-   ','\r\\   '];

const spinnerFunction = () => {
  let increment = 0;
  for (let elements of specialCharacter) {
    increment = increment + 150;
    setTimeout(() => {
      process.stdout.write(elements);
    }, increment);
  }
};
spinnerFunction(specialCharacter);
