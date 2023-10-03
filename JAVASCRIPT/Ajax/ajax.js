console.log("Ajax...");

// Ajax is mainly used for client server communication without page refreshing

let xhr = new XMLHttpRequest();
//xhr- xml http request

xhr.open("get","https://jsonplaceholder.typicode.com/users");
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    xhr.send();
})
// xhr.send();
console.log("xhr",xhr);

// let a = new XMLHttpRequest();

// a.open("get","https://jsonplaceholder.typicode.com/users");
// // a.send();
// console.log(a);

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if(xhr.readyState == 4) {

        if(xhr.status == 200) {

            console.log("Success, response recieved...");
            console.log(xhr.response);
            var result = JSON.parse(xhr.response);
            console.log("Result : ", result);

            let html_content = ``;

            for(let i=0; i<result.length;i++) {
                console.log(result[i]);
                html_content = html_content + `<tr><td> ${result[i].id} </td><td>${result[i].name}</td><td>${result[i].phone}</td><td>${result[i].username}</td></tr>`;
                document.getElementById("content").innerHTML = html_content;
            }

        }else {
            console.log("Failed to get response!");
        }
    }
}



// //Error response
// let xhr1 = new XMLHttpRequest();

// xhr1.open("get","https://jsonplaceholder.typicode.com/userssssssssss");
// xhr1.send();
// console.log("xhr1",xhr1);
// //Check response code and network tab

// xhr1.onreadystatechange = function() {
//     console.log(xhr1.readyState);
//     if(xhr1.readyState == 4 ) {

//         if(xhr1.status == 200) {

//             console.log("Success, response recieved...");
//         }else {
//             console.log("Response data not recieved!");
//         }
//     }
// }