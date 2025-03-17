const a = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(["one", "two", "three"]);
    }, 5000);
});
console.log("Hi");
a.then((result) => {
    console.log("Result===>", result)

}).catch((error) => {
    console.log("Error====>", error)
}).finally((final) => {
    console.log("finally", final); // this will always run no matter what
})
console.log("Hello");
// Output:
// Hi
// Hello
// Result===> (3) ["one", "two", "three"]   // after 5 seconds
// finally  // after 5 seconds      

