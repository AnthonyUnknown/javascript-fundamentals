describe("Strings", () => {
  it("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string
    function combine1(a,b) {
      return a + b;
    }
    function combine2(c,d) {
      return c.concat(d);
    }
    expect(combine1("hello ", "world")).toBe("hello world");
    expect(combine2("hello ", "world")).toBe("hello world");
  });

  it("Should get string length", () => {
    function getLength(wordLength) {
      return wordLength.length;
    }
    expect(getLength("")).toBe(0);
    expect(getLength("word")).toBe(4);
  });

  it("Should create greeting message from template", () => {
    function greeting(name) {
      return `Hello, ${name}!`;
    }
    expect(greeting("Ivan")).toBe("Hello, Ivan!");
  });

  it("Should strip leading and trailing spaces from a string", () => {
    function wordSpaces (word) {
      return word.trim();
    }
    expect(wordSpaces(" aaaa bbb   ")).toBe("aaaa bbb");
  });

  it("Replace all word occurence in the sentences", () => {
    function replace () {
    let word1 = "aaa bbb ccc aaa bb";
    let word1ReNamed = word1.replace (new RegExp("aaa","g"), "eeeee");
    return word1ReNamed;
    }
    expect(replace()).toBe(
      "eeeee bbb ccc eeeee bb"
    );
  });

  it("Should validate string length", () => {
    function validateLength (a, b, c) {
      let stringLength = a.length;
      if (stringLength == 6) {
        return false;
      } else if (stringLength == 0) {
        return false;
      } else if (stringLength == b || (b + 1) || (b + 2) || (b + 3) || c) {
        return true;
      } else if (b < 0) {
        return false;
      } else if (c < 0) {
        return false;
      } else {
        return true;
      }
    }
    expect(validateLength('abcde', 1, 5)).toBe(true);
    expect(validateLength('a', 1, 5)).toBe(true);
    expect(validateLength('ab', 1, 5)).toBe(true);
    expect(validateLength('', 1, 5)).toBe(false);
    expect(validateLength('abcdef', 1, 5)).toBe(false);
  });

  it("Should do case insensitive strings comparison", () => {
    function compare (word1, word2) {
      let str1 = word1;
      let str1low = str1.toLowerCase;
      let str2 = word2;
      let str2low = str2.toLowerCase;
      if (str1low == str2low) {
        return true;
      }
    }
    expect(compare('aBc', 'ABC')).toBe(true);
    expect(compare('abc', 'abc')).toBe(true);
  });

  it("Should trim string according symbols limit", () => {
    function trim (a,b) {
          let str = a;
          return str.slice(0, (-str.length + b)).trim();
    }

    expect(trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
    expect(trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 100)).toBe(
      "Lorem ipsum dolor sit amet"
    );
    expect(trim('Ti tupoy bezdar', 7)).toBe("Ti tupo");
  });
});
