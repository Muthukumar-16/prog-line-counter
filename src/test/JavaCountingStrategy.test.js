const JavaCountingStrategy = require("../modules/stratergies/JavaCountingStrategy");

describe("JavaCountingStrategy", () => {
    let javaCountingStrategy;

    beforeEach(() => {
        javaCountingStrategy = new JavaCountingStrategy();
    });

    it("should correctly count lines in a Java file", () => {
        const lines = [
            "import java.util.*;",
            "",
            "// file created on 1st Jan 2020",
            "// author: @openenvoy",
            "public class Main {",
            "  // This is another comment line",
            "  public static void main(String[] args) {",
            '    System.out.println("Hello world!"); // code, not comment 11',
            "  }",
            "}",
            "",
            "",
        ];

        const result = javaCountingStrategy.countLines(lines);

        expect(result.blankLines).toBe(3);
        expect(result.commentLines).toBe(3);
        expect(result.codeLines).toBe(6);
        expect(result.totalLines).toBe(12);
    });
});
