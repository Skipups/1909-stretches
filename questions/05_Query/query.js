const items = [
  {
    id: 1,
    name: "foo",
    price: 2
  },
  {
    id: 3,
    name: "bar",
    price: 4
  },
  {
    id: 66,
    name: "bazz",
    price: 4
  }
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  console.log("arr", arr);
  console.log("obj", obj);
  return arr.reduce((accum, curr) => {
    console.log("curr", curr);
    console.log("accum", accum);
    for (let key in obj) {
      if (obj[key] === curr[key]) {
        accum += curr;
        console.log("curr", curr);
        console.log("accum", accum);
      }
    }
    return accum;
  }, {});
}

module.exports = { query, items };
