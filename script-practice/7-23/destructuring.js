const teams = ['seahawks', 'hanshin tigers', 'hiroshima carps', 'detroit pistons'];
const [team1, team2, ...theRest] = teams;

// console.log(team1, theRest)

const clothes = [
  shirt = {
    'brand' : 'jcrew',
    price: 40,
    'gender' : 'female',
    new: true,
  },
  shoes = {
    brand: 'uggs',
    price: 70,
    gender: 'female',
    new: false,
  },
  glasses = {
    brand: 'ray-bans',
    price: 120,
    gender: ['male', 
      trans = {
        name: 'latasha',
        height: 6.5,
    }],
    new: true,
  }
]

console.log(clothes[0].brand)
// console.log(clothes[2].gender[1].name.split('')[0].toUpperCase())
clothes[0].fresh = true, clothes[1].fresh = false;
let key = "price";
// console.log(clothes[1][key])
// console.log('brand' in clothes[0]);

for (let key in clothes) {
  // console.log(clothes[key].gender[1]);
}
// console.log(Math.trunc(78.9));
// console.log(Math.ceil(483.00001))

const newMap = clothes.map(item => {
  item.brand = 'ecko';
})

// console.log(newMap);