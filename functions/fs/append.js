import * as fs from 'fs'
export const createFile = () =>{
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
} 