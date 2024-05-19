const FileReader = require("./modules/FileReader.js");
const JavaCountingStrategy = require("./modules/stratergies/JavaCountingStrategy.js");
const LineCounter = require("./modules/LineCounter.js");

const filePath = "/Users/muthu/Desktop/muthu-workspace/prog-line-counter/src/test/java/file.java";
const fileReader = new FileReader(filePath);
const javaCountingStrategy = new JavaCountingStrategy();
const lineCounter = new LineCounter(fileReader, javaCountingStrategy);

lineCounter.countAndPrintLines();
