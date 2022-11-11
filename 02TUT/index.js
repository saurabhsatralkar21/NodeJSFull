const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseWriteRenamed.txt'));
        
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseWriteRenamed.txt'), 'utf-8');
        console.log(newData);
    
    } catch (err) {
        console.log(err);
    }
}

fileOps();

// Read a file
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// console.log('Hello ....');

// Write to the new file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
//     if(err) throw err;
//     console.log("Writing complete");

//     // Append to the new file
//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is', (err) => {
//         if(err) throw err;
//         console.log("Append complete");

//         // Rename the new file
//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'replyRenamed.txt'), (err) => {
//             if(err) throw err;
//             console.log("Renaming the file complete");
//         });
//     });
// });



// Catch the error and show what it is
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})