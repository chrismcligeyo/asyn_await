//add async to beginnig of function. Adding async makes function return promise, instead of having to do new Promise(function(resolve,reject

// async function myFunc () {
//     return 'Hello';
//
//     const promise = new Promise((resolve,reject) => {
//        setTimeout(() => resolve('Hello'), 1000);
//     });
//
//
// }
//
// myFunc()
//     .then(response => console.log(response)); //displays Hello immediately

//with await
// async function myFunc () {
//
//
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });
//
//     const response = await promise; //wwait until promise is resolved
//     return response;
// }
//
// myFunc()
//     .then(response => console.log(response)) //waits for 1second until promise is resolved then displays hello

//to check for error
// async function myFunc () {
//
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });
//
//     const error = true;
//
//     if(!error){
//
//         const response = await promise; //wwait until promise is resolved
//         return response;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
//
//
// }
//
// myFunc()
//     .then(response => console.log(response)) //waits for 1second until promise is resolved then displays hello
//     .catch(error => console.log(error)); // displays
//  /*
//     Error: Something went wrong
//     at myFunc (app.js:45)
//     at app.js:51*/
//

//better example
async function getUsers () {
    //await response of the fetch call

    const response = await fetch ("http://jsonplaceholder.typicode.com/users");

    //only proceed once its resolved
    const data = await response.json();

    //omly proceed once second promise is resolved
    return data;
}

getUsers()
 .then(users => console.log(users)); //displays an object of 10users