function forLoop(inputArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      inputArray[i] = (`I am 1 strange loop.`);
    }
    else {
      inputArray[i] = (`I am ${i} strange loops.`);
    }
  }
  console.log(inputArray);
  return inputArray;
}

function whileLoop (inputNumber) {
  while (inputNumber > 0) {
    console.log(--inputNumber);
  }
  return 'done';
}

function doWhileLoop (inputArray) {
  var i = 0;
  function incrementVariable() {
    i++;
  }
  do {
    inputArray.splice(i , 1);
  } while (inputArray.length > 0 && incrementVariable());
  console.log(inputArray);
}
  

