


//Named Function

function greet() {

    console.log("greet")

}

greet();


//Anonymous function

const fun1 = function () {

    console.log("Anonymous");

}
fun1();


//Another Anonymous function

const fun2 = () => {

    console.log("Anonymous");

}

fun2();

//callbacks

// using the Anonymous function to use another function
// function la we can use another function

//printb even or odd number

function add(a, b) {
    if ((a + b) % 2 == 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}
add(10, 5)


//another call back

function add(a, b) {
    if ((a + b) % 2 == 0) {
        messenger("even")
    } else {
        messenger("odd")
    }
}
function messenger(mess = "") {
    console.log(mess);
}
add(10, 5)


//another call back 

function add(a, b, cb) {
    if ((a + b) % 2 == 0) {
        cb("even")
    } else {
        cb("odd")
    }
}
function messenger(mess = "") {
    console.log(mess);
}
add(10, 5, messenger)


