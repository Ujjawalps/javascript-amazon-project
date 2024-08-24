import { formatCurrency } from "../scripts/utils/money.js";

console.log('test suite : formatCurrency function');

console.log('converts cents to dollars and cents');
if(formatCurrency(2095) === "20.95"){
  console.log("Test passed!");
}else{
  console.log("Test failed!");
}

console.log('converts 0 to 0.00');
if(formatCurrency(0) === "0.00"){
  console.log("Test passed!");
}else{
  console.log("Test failed!");
}

console.log('rounds down to 2 decimal places');
if(formatCurrency(2095.5) === "20.96"){
  console.log("Test passed!");
}else{
  console.log("Test failed!");
}
if(formatCurrency(2095.4) === "20.95"){
  console.log("Test passed!");
}else{
  console.log("Test failed!");
}