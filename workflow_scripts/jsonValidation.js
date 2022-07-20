const fs = require('fs');
const path = require('path');
const {getJsonFileNames} = require("./helpers/getJsonFileNames");
const {isValidJSON} = require("./helpers/isValidJSON");
const {log} = require("./helpers/log");

const init = async () => {
    const fileNames = await getJsonFileNames();

    for (let fn of fileNames) {
        const dirPath = path.join(__dirname, '..', `/${fn}`);
        const rawData = fs.readFileSync(dirPath);

        if (isValidJSON(rawData)) {
            log.info(`[${fn}] - JSON file is valid.....`);
        } else {
            log.error(`[${fn}] - Invalid JSON file.`);
            process.exit(1);
        }
    }
}

init();