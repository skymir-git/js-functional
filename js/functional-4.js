var products = [
  {
    is_selected: true, // <--- 장바구니에서 체크 박스 선택
    name: "반팔티",
    price: 10000, // <--- 기본 가격
    sizes: [
      // <---- 장바구니에 담은 동일 상품의 사이즈 별 수량과 가격
      { name: "L", quantity: 4, price: 0 },
      { name: "XL", quantity: 2, price: 0 },
      { name: "2XL", quantity: 3, price: 2000 }, // <-- 옵션의 추가 가격
    ],
  },
  {
    is_selected: true,
    name: "후드티",
    price: 21000,
    sizes: [
      { name: "L", quantity: 2, price: -1000 },
      { name: "2XL", quantity: 4, price: 2000 },
    ],
  },
  {
    is_selected: false,
    name: "맨투맨",
    price: 16000,
    sizes: [{ name: "L", quantity: 4, price: 0 }],
  },
];

// 모든 수량

var total_quantity = _.reduce(function (tq, product) {
  return _.reduce(
    product.sizes,
    function (tq, size) {
      return tq + size.quantity;
    },
    tq
  );
}, 0);

_.go(products, total_quantity, console.log);

// 선택된 총 수량
_.go(products, _.filter(_get("is_selected")), total_quantity, console.log);

// 모든 가격

var total_price = _.reduce(function (tp, product) {
  return _.reduce(
    product.sizes,
    function (tp, size) {
      return tp + (product.price + size.price) * size.quantity;
    },
    tp
  );
}, 0);

_.go(products, total_price, console.log);

// 선택된 총 금액

_.go(products, _.filter(_get("is_selected")), total_price, console.log);
