describe('Array', () => {
  it('Should find position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(arr1.indexOf(5)).toBe(1);
    expect(arr1.indexOf(3)).toBe(3);

    // TODO: Write additional its
    expect(arr1.indexOf(1)).toBe(0);
    expect(arr1.indexOf(2)).toBe(4);
  });

  it('Should return specified array twice', () => {
    let double = [1, 2, 3];
    
    
    expect(double.concat(double)).toStrictEqual([1, 2, 3, 1, 2, 3]);
    let triple =[3, 2, 1, 4];
    expect(triple.concat(triple)).toStrictEqual([3, 2, 1, 4, 3, 2, 1, 4]);


    // TODO: Write additional its
  });

  it('Convert number array to the array of string values', () => {
    let arrayNumber = [1,2,3];
    let newArrayNumber = arrayNumber.map((item) => `${item}`);
    expect(newArrayNumber).toStrictEqual(['1', '2', '3']);
    let arrayNumberDouble = [21, 23, 88];
    let newArrayNumberDouble = arrayNumberDouble.map((item) => `${item}`);
    expect(newArrayNumberDouble).toStrictEqual(['21', '23', '88']);

    // TODO: Write additional its
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    let calcArray = [1, 2, 1, 4, 1];
    let newArray = calcArray.filter((item) => item == 1);
    expect(newArray.length).toBe(3);

    // TODO: Write additional its
  });

  it('Should convert strings from specified array to uppercase', () => {
    function stringUp (string1) {
      return string1.map((item) => item.toUpperCase());
    }
    let stringUpper = ["aaaa", "abc"];
    expect(stringUp(stringUpper)).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insertItem (arr, pos, item) {
      arr.splice(pos, 0, item);
      return arr
    }
    let array1 = [1, 2, 4];
    expect(insertItem([1, 2, 4], 2, 3)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return n last items from the specified array', () => {
    let last = [1, 2, 3, 4, 5, 6, 7];
    expect(last.slice(-3)).toStrictEqual([5, 6, 7]);
  });

  it('Return 3 largest items from integer array', () => {
    let array = [1, 3, 8, 3, 29, 11, 2, 17, 9, 1];
    let find3Largest = array.filter((item) => item > 10);
    expect(find3Largest).toStrictEqual(
      [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    let array = [2, 3, 1, 8, 4, 5];
    function compareNumeric(a, b) {
      if (a > b) return -1;
      if (a == b) return 0;
      if (a < b) return 1;
    }

    expect(array.sort(compareNumeric)).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it('Should summarize all items in numbers array', () => {
    let arrayNumber = [1, 5, 7, 9, 3];
    let sumArray = arrayNumber.reduce((sum, current) => sum + current, 0);
    expect(sumArray).toBe(25);
  });

  it('Should return number of falsy values in specified array', () => {
    let arrayFalse = [1, 0, "", null, "hello", "0"];
    let getNumberOfFalsy = arrayFalse.filter((item) => item == false);
    expect(getNumberOfFalsy.length).toBe(3);
  });

  it('Should return array of unique items from specified array', () => {
    let array = ["a", "b", "a", "c", "e", "b", "o"];
    array.splice(2,1);
    array.splice(4,1)
    expect(array).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {
    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    expect(/* group(arr, 'country') */).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should create array with all falsy values removed.', () => {
    let array = [1, 0, null, "a"];
    let newArray = array.filter((item) =>  Boolean(item) == true);
    expect(newArray).toStrictEqual([1, 'a']);
  });

  it('Should flatten array (make it one level less deep)', () => {
    expect([1, [2, [3, [4]], 5]].flat()).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flatten array.', () => {
    expect([1, [2, [3, [4]], 5]].flat(Infinity)).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should create array of unique values that are included in all given arrays', () => {
    let array1 = [1, 2, 3, 4];
    let array2 = [8, 3, 1, 0, 9];
    function arrayAll (arr1, arr2) {
      return array1.filter(item => -1 !== array2.indexOf(item));
    }
    expect(arrayAll(array1, array2)).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array, that predicate returns truth for and return an array of the removed elements. ' +
    'The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8]; // функция ремув( массив 1 аргумент, 2 арг функция гт5, фильтрую массив,)
    const gt5 = v => v > 5;
     function remove (arr1, fn1) {
       return arr1.filter((item, index) => fn1(item) ? arr1.splice(index, 1) : fn1(item));
     }
     let removed = remove(arr,gt5);
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});
