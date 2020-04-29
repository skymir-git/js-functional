var users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

var new_list = [];
for (var i = 0; i < temp_users.length; i++) {
  new_list.push(temp_users[i].name);
}
console.log(new_list);

temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

var ages = [];
for (var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

/*console.log(
    _filter([1, 2, 3, 4], function (num) {
        return num % 2;
    })
)
console.log(
    _filter([1, 2, 3, 4], function (num) {
        return !(num % 2);
    })
)*/

var over_30 = _filter(users, function (user) {
  return user.age >= 30;
});

console.log(over_30);

var names = _map(over_30, function (user) {
  return user.name;
});
console.log(names);

var under_30 = _filter(users, function (user) {
  return user.age < 30;
});

console.log(under_30);

var ages = _map(under_30, function (user) {
  return user.age;
});
console.log(ages);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    function (user) {
      return user.name;
    }
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    function (user) {
      return user.age;
    }
  )
);

console.log(
  _map(document.querySelectorAll("*"), function (node) {
    return node.nodeName;
  })
);

var add = _curry(function (a, b) {
  return a + b;
});

var add10 = add(10);
var add5 = add(5);
console.log(add10(5));
console.log(add(5)(3));
console.log(add5(3));
console.log(add(10)(3));

var sub = _curryr(function (a, b) {
  return a - b;
});

console.log(sub(10, 5));

var sub10 = sub(10);
console.log(sub10(5));

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get("name")
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get("age")
  )
);

/*
var user1 = users[0];
console.log(user1.name);
console.log(_get(user1, "name"));
console.log(_get("name")(user1));

var get_name = _get("name");
console.log(get_name(user1));
*/

console.log(_reduce([1, 2, 3], add, 10));
console.log(_reduce([1, 2, 3], add));
console.log(_reduce([1, 2, 3, 4], add, 10));

var f1 = _pipe(
  function (a) {
    return a + 1;
  },
  function (a) {
    return a * 2;
  },
  function (a) {
    return a * a;
  }
);

console.log(f1(1));

_go(
  1,
  function (a) {
    return a + 1;
  },
  function (a) {
    return a * 2;
  },
  function (a) {
    return a * a;
  },
  console.log
);

_go(
  users,
  _filter(function (user) {
    return user.age >= 30;
  }),
  _map(_get("name")),
  console.log
);

_go(
  users,
  _filter((user) => user.age < 30),
  _map(_get("age")),
  console.log
);

// 화살표 함수
// var a = function (user) {
//   return user.age >= 30;
// };
//
// var a = (user) => user.age >= 30;
//
// var add = function (a, b) {
//   return a + b;
// };
//
// var add = (a, b) => a + b;
// var add = (a, b) => {
//   return a + b;
// };

_each(null, console.log);

console.log(
  _filter(null, function (v) {
    return v;
  })
);

_go(
  null,
  _filter(function (v) {
    return v % 2;
  }),
  _map(function (v) {
    return v * v;
  }),
  console.log
);

// _keys

console.log(_keys({ name: "ID", age: 33 }));
console.log(_keys([1, 2, 3, 4]));
console.log(_keys(10));
console.log(_keys(null));

_each(
  {
    13: "ID",
    19: "HD",
    23: "JK",
  },
  function (name) {
    console.log(name);
  }
);

console.log(
  _map(
    {
      13: "ID",
      19: "HD",
      23: "JK",
    },
    function (name) {
      return name.toLowerCase();
    }
  )
);

_go(
  {
    1: users[0],
    3: users[2],
    5: users[4],
  },
  _map(function (user) {
    return user.name.toLowerCase();
  }),
  console.log
);
