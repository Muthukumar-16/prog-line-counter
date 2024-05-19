const CountingStrategy = require("../CountingStratergy.js");

class JavaCountingStrategy extends CountingStrategy {
    countLines(lines) {
        let blankLines = 0;
        let commentLines = 0;
        let codeLines = 0;
        let inMultiLineComment = false;

        lines.forEach((line) => {
            const trimmedLine = line.trim();

            if (inMultiLineComment) {
                commentLines += 1;
                if (trimmedLine.endsWith("*/")) {
                    inMultiLineComment = false;
                }
            } else if (trimmedLine === "") {
                blankLines += 1;
            } else if (trimmedLine.startsWith("//")) {
                commentLines += 1;
            } else if (trimmedLine.startsWith("/*")) {
                commentLines += 1;
                inMultiLineComment = !trimmedLine.endsWith("*/");
            } else {
                codeLines += 1;
            }
        });

        return { blankLines, commentLines, codeLines, totalLines: lines.length };
    }
}

module.exports = JavaCountingStrategy;
