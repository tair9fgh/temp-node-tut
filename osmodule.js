const os = require('node:os');

const user = os.userInfo();
console.log(user);

console.log(`the system update is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);
//just type npm init to have package.json
//but better to write npm init -y
