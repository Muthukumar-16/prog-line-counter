class LineCounter {
    constructor(fileReader, countingStrategy) {
        this.fileReader = fileReader;
        this.countingStrategy = countingStrategy;
    }

    countAndPrintLines() {
        const lines = this.fileReader.readFile();
        const { blankLines, commentLines, codeLines, totalLines } = this.countingStrategy.countLines(lines);

        console.log(`Blank: ${blankLines}`);
        console.log(`Comments: ${commentLines}`);
        console.log(`Code: ${codeLines}`);
        console.log(`Total: ${totalLines}`);
    }
}

module.exports = LineCounter;
