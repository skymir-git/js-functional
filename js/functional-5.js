function square(a) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(a * a);
    }, 500);
  });
}

square(10).then(function (res) {
  console.log(2);
  console.log(res);
});

square(10).then(square).then(square).then(square).then(console.log);

_.go(square(10), square, square, square, console.log);
