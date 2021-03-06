const fs = require('fs');
const path = require('path');
const {getJsonFileNames} = require("./helpers/getJsonFileNames");
const {log} = require("./helpers/log");

const init = async () => {
    const fileNames = await getJsonFileNames();

    for (let fn of fileNames) {
        const dirPath = path.join(__dirname, '..', `/${fn}`);
        const rawData = fs.readFileSync(dirPath);

        // TODO: Complete URL Validation
        log.info(`Count of URLs in ${fn}: ${JSON.parse(rawData).length}`);
    }
}

init();