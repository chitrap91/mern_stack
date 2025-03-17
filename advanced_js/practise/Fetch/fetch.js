// var uri = "https://jsonplaceholder.typicode.com/todos/";
// fetch(uri);
// console.log(fetch(uri));
// fetch(uri).then((response) => {
//     console.log(response);
//     return response.json();
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error);
// });

// // Get Data
// var uri = "https://jsonplaceholder.typicode.com/todos/";
// async function getData() {
//     try {
//         const response = await fetch(uri);
//         console.log(response);
//         const result = await response.json();

//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }


// }
// getData();


//Post Data
var uri = "https://tasks-fs.onrender.com/CreateTodo";

fetch(uri, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id: 3,
        title: "New Task"
    })
}).then(response => {
    console.log(response);
    //return response.json();

}).catch(error => {
    console.log(error);
});



