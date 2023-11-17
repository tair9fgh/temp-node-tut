const { readFileSync, writeFileSync} = require('fs');//always remember:
//if you use the same module twice the names like readFileSync need to be different
console.log('start');
 const firstFile = readFileSync('./content/first.txt', 'utf8');
 const secondFile = readFileSync('./content/second.txt', 'utf8');
 //const secondFile:String;s
 console.log(firstFile, secondFile);

 writeFileSync(
     './content/result-syync.txt',
     `Here is the result : ${firstFile}, ${secondFile}`,
     {flag: 'a'}
 )
 console.log('done with this task');
 console.log('starting with the next task');
