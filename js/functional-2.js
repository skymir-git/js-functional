var users = [
  { id: 10, name: "ID", age: 36 },
  { id: 20, name: "BJ", age: 32 },
  { id: 30, name: "JM", age: 32 },
  { id: 40, name: "PJ", age: 27 },
  { id: 50, name: "HA", age: 25 },
  { id: 60, name: "JE", age: 26 },
  { id: 70, name: "JI", age: 31 },
  { id: 80, name: "MP", age: 23 },
];

console.log(
  _map(users, function (user) {
    return user.name;
  })
);

var a = 10;
console.log(_identity(a));
/*
console.log(users[0]);
console.log(_keys(users[0]));
console.log(_values(users[0]));
*/

console.log(_pluck(users, "age"));
console.log(_pluck(users, "name"));
console.log(_pluck(users, "id"));

console.log(
  _filter(users, function (user) {
    return user.age > 30;
  })
);

console.log(
  _reject(users, function (user) {
    return user.age > 30;
  })
);

console.log(_compact([1, 2, 0, false, null, {}]));

console.log(
  _get(
    _find(users, function (user) {
      return user.id === 50;
    }),
    "name"
  )
);

_go(
  users,
  _find_index(function (user) {
    return user.id === 50;
  }),
  console.log
);

console.log(
  _find_index(users, function (user) {
    return user.id === 50;
  })
);

console.log(
  _some([1, 2, 5, 10, 20], function (val) {
    return val > 10;
  })
);

console.log(
  _some([1, 2, 5, 10, 20], function (val) {
    return val > 20;
  })
);

console.log(
  _every([1, 2, 5, 10, 20], function (val) {
    return val > 10;
  })
);

console.log(
  _every([12, 24, 5, 10, 20], function (val) {
    return val > 3;
  })
);

console.log(_some([1, 2, 0, 10]));
console.log(_some([null, false, 0]));
console.log(_some([null, false, 1]));

console.log(_every([1, 2, 0, 10]));
console.log(_every([null, false, 0]));
console.log(_every([null, false, 1]));
console.log(_every([1, 2, 10]));

function _min(data) {
  return _reduce(data, function (a, b) {
    return a < b ? a : b;
  });
}

function _max(data) {
  return _reduce(data, function (a, b) {
    return a > b ? a : b;
  });
}

console.log(_min([1, 2, 4, 10, 5, -1]));
console.log(_max([1, 2, 4, 10, 5, -1]));

function _min_by(data, iter) {
  return _reduce(data, function (a, b) {
    return iter(a) < iter(b) ? a : b;
  });
}

function _max_by(data, iter) {
  return _reduce(data, function (a, b) {
    return iter(a) > iter(b) ? a : b;
  });
}

var _min_by = _curryr(_min_by),
  _max_by = _curryr(_max_by);

console.log(_min_by([1, 2, 4, 10, 5, -1], Math.abs));
console.log(_max_by([1, 2, 4, 10, 5, -1], Math.abs));

console.log(
  _min_by(users, function (user) {
    return user.age;
  })
);

_go(
  users,
  _filter((user) => user.age >= 30),
  _min_by(_get("age")),
  console.log
);

_go(
  users,
  _reject((user) => user.age >= 30),
  _max_by(_get("age")),
  console.log
);
