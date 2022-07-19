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

        for (let url of JSON.parse(rawData)) {
            // TODO: Complete URL Validation
            log.info(url);
        }
    }
}

init();