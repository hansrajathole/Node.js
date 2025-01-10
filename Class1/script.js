let argv = process.argv

for(let i = 2 ; i<argv.length ; i++){
    console.log("hello to",argv[i]);
}


let a = require("./math")
console.log(a);

