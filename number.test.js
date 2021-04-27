describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a % b).toBe(5);
    expect(a % a).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average (a,b,c) {
      return ((a + b + c) / 3);
    }
    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(a) {
      let toText = a.toString();
      let lastNumb = toText.slice(-1);
      let toNumb = +(lastNumb);
      return toNumb;
    }
    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(a) {
      let sum = 0, x = String(a);
      for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
      } 
      return (sum)
    }
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime (a) {                 // idk if this right or not, idk why the string "if (a == 2 ... " doesnt work
      if (a == 2) {
        return true;
      } else if (a == 3) {
        return true;
      }
       else if (a % 2 == 0) {
        return false;
      } else if (a % 3 == 0) {
        return false;
      } else {
        return false;
      }
    }
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);

    // TODO: Write additional tests
  });

  test("Should convert string to number", () => {
    function convert(a) {
      return +a; // Number(a)
    }
    expect(convert('234')).toBe(234);
  });

  test("Should find highest value", () => {
    function max(...all) {
      return Math.max(...all);
    }
    function max2(...all) {
      let max = all[0];
      all.forEach(function(c) {
        if (c > max) max = c
      });
      return max;
    }
    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test("Should find lowest value", () => {
    function min(...all) {
      return Math.min(...all);
    }

    function min2(...all) {
      let min = all[0];
      all.forEach(function(c) {
        if (c < min) min = c
      });
      return min;
    }
    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
  });

  test("Should round up a value to the nearest integer", () => {
    //function numb(a) {                         // dont understand how to use substring or slice, i tried different options
    // let numbToString = String(a);
    //  let subNumb = numbToString.substring(1);
    // let stringToNumb = Number(subNumb);
    //  return stringToNumb;
   // } 
    
    function numb(b) {
      let numbTrunc = Math.trunc(b);
      return numbTrunc;
    }

    
    
    expect(Math.round(1.1)).toBe(1);
    expect(Math.round(1.8)).toBe(2);
    expect(numb(1.2)).toBe(1);
    expect(Math.ceil(-1.2)).toBe(-1);
});

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.2)).toBe(1);
    expect(Math.floor(1.8)).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    expect(11000000).toBe(192);

  });

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(/* ??? 127 */).toBe("1010111");
    expect(/* ??? 65 */).toBe("110101");
  });
});
