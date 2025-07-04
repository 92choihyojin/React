// 외부에 있는 공개 모듈을 가져와야한다. => " import "
const mouleData = require("./math");
import { add, sub } from "./math.js";
import randomcolorolor from "randomcolor";

console.log(moduleData);
console.log(add(10, 20));
console.log(sub(10, 20));

let color = randomcolor();
console.log(`color= ${color}`);
