const { readFile, writeFile} = require('fs');
console.log('start');//firstly
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;//here
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;//here
        writeFile(
            './content/result-syync.txt', 
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');//thirdly because it's async so it loads
            }
        );
    })
});
console.log('starting with the next task');//secondly