const Log = {
    info: (value) => console.info("\x1b[34m", value),
    error: (value) => console.error("\x1b[31m", value),
};

const isValidJSON = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        // Has syntax error so we log a message and exit with an error code
        return false;
    }

    return true;
}


// process.exit(0);

const fs = require('fs');

let rawData = fs.readFileSync('./test.json');


if (isValidJSON(rawData)) {
    Log.info('JSON file is valid.');
    process.exit(0);
} else {
    Log.error('Invalid JSON file.');
    process.exit(1);
}
