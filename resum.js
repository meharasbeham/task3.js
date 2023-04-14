// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 let person = { 
     'name':'Meharas',
    'age':'41',
     'qualification':"Bcom studying",
     'aime':"Aany work give my best",
     'hopy':"Poem writting, drawing",
     'address':"No.6 ,karpagam nagar,pudukkottai-622003",
     'cell':9965116655,
    ' gmail':"mehashahulba1982@gmail.com"};
     

  console.log(person);

  //end-here
});