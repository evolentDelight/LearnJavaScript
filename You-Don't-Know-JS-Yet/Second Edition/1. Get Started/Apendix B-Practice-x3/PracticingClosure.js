function range(start, end) {
  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end);
    };
  } else if (start > end) {
    console.log(start, end, []);
    return [];
  } else {
    return getRange(start, end);
  }

  function getRange(start, end) {
    if (start > end) {
      console.log(start, end, []);
      return [];
    }

    const result = new Array(end - start + 1);
    for (let i = 0; i < result.length; i++) {
      result[i] = start + i;
    }
    console.log(start, end, result);
    return result;
  }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
