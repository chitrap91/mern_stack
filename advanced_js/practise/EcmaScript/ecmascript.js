//Map method

const data = [1, 2, 3, 4, 5, 6];
const mappedDta = data.forEach((element) => element * 2);
console.log(mappedDta);
//ans : [2,4,6,8,10]


//Filter method
const data2 = [1, 2, 3, 4, 5, 6];
const filteredData = data.filter((element) => element % 2 == 0);
console.log(filteredData);

//answer:[2,4,6]


//Add sum
// //Reduce the no of array . We can use this for all arithematic operation

const data3 = [6, 7, 8, 4, 6];
const sum = data.reduce((a, b) => a + b);
console.log(sum);

//answer:15



//Sort
//Ascending Order
const data4 = [6, 7, 9, 8, 4, 6];
data4.sort((a, b) => a - b);
console.log(data4);

// ans [4,6,6,7,8,9]

//Decending Order

const data5 = [6, 7, 9, 8, 4, 6];
data5.sort((a, b) => b - a);
console.log(data5);

//ans [9,8,7,6,6,5,4]
