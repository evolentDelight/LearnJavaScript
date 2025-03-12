//Creating a Regular Expression
let regexp1 = new RegExp("abc");
let regexp2 = /abc/;

//'-' hyphen: order is determined by the Unicode number
console.log("Hyphen: " ,/[d-t]/.test("e"))

//'?' Quesiton mark: optional character - may occur zero or one time
let favorite = /favou?rite/
console.log("Question Mark: ", favorite.test("favourite"))
console.log("Question Mark: ", favorite.test("favorite"))