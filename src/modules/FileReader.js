const fs = require("fs");

class FileReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    readFile() {
        return fs.readFileSync(this.filePath, "utf8").split("\n");
    }
}

module.exports = FileReader;
