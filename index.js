const log = (value) => console.log("\x1b[34m", value);

const isValidJSON = (str) => {
    try{
        JSON.parse(str);
    } catch (e) {
        // Has syntax error so we log a message and exit with an error code
        console.error("JSON IS NOT VALID!");
        process.exit(1);
    }
    console.log("ALL GOOD WITH THE JSON FILE!");

    process.exit(0);
}


// process.exit(0);

const fs = require('fs');

let rawData = fs.readFileSync('./test.json');
isValidJSON(rawData);