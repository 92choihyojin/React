//익명객체

const person = {
  name: "효진ㅇ",
  age: 25,
  tall: 185,
  name2: "효ㅈ나",
  age2: 25,
  tall2: 185,
  name3: "효ㅈ나",
  age3: 25,
  tall3: 185,
};
let keyArray = Object.keys(person);
console.log(keyArray);
for (let i = 0; i < keyArray.length; i++) {
  //console.log(keyArray[i]);
  console.log(`${keyArray[i]}:${person[keyArray[i]]}`);
}
