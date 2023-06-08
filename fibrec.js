function fibonacci(num) {
    if (num <= 1) {
      return [0, 1];
    } else {
      let fibArr = fibonacci(num - 1); // 0 1 1 2
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
      return fibArr;
    }
  }
  let r = fibonacci(5)
  console.log(r)