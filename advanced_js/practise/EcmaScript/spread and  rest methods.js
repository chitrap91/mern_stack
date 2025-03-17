//  using spread methods to copy array

arr = [1, 2, 4, 5, 6, 7];
const copy = [...arr];
console.log(copy);


//using spread methods to copy an object

const obj = {
    name: "chitra",
    pref: [1, 2, 3]
}
const copy1 = {
    ...obj
}


//Rest App

function add(a, b, ...c) {
    console.log(c);
    return a + b;


}
add(2, 4, 6, 7, 8, 9, 5)