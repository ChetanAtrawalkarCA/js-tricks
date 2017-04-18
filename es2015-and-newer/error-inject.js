const errorInject = (paramName) => {
  throw new Error(`Missing parameter "${paramName}"`);
};

// Usage example
const square = (num = errorInject('num')) => {
  return num * num;
};

square(); // Uncaught Error: Missing parameter "num"
square(11); // 121
