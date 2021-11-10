const fs = require('fs');
const readline = require('readline');
const Emitter = require('events');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function(){
      console.log("Hello all!");
});
emitter.emit(eventName);

fs.open('./02-write-file/text.txt', 'a', () => {});
rl.question('Write your text, please: ', function(answer) {
    fs.appendFile('./02-write-file/text.txt', (answer), (err) => {
      const str = answer.toString('utf8', 0, answer.length - 2);
      if(str === 'exit'){
        console.log('Good bye!');
        process.exit();
      };
    });
});
process.openStdin().on('keypress', function(chunk, key) {
  if(key && key.name === 'c' && key.ctrl) {
    console.log('Good bye!');
    process.exit();
  }
});
