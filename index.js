let n = 8; 


let string = "";

for(let i = 0; i < 5; i++) { // external loop
  for(let j = 0; j < 8; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
  
}
// printing the string
console.log(string);