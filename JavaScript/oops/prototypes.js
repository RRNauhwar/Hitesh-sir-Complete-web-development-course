let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};
console.log("lenovo", lenovo.__proto__);
Object.setPrototypeOf(tesla, genericCar);
console.log("tesla", Object.getPrototypeOf(tesla));
