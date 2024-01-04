console.log("Hello javascript");

async function getData() {

let user_data = await fetch('http://localhost:3000/getFormData');
console.log("user_data : ", user_data.response);
console.log("typeOf(user_data) : ", typeof(user_data));

let parsed_user_data = await user_data.json();
console.log("parsed_user_data : ", parsed_user_data);
console.log("typeOf(parsed_user_data) : ", typeof(parsed_user_data));

let content = document.getElementById('content');
let dataComponent = '';

for(let i=0; i<parsed_user_data.length; i++) {
    let id = parsed_user_data[i]._id;
    let editTag = `<td value=${parsed_user_data[i]._id}>Edit</td>`;
    console.log("editTag : ", editTag);
    dataComponent = dataComponent + `
    <tr>
    <td>${parsed_user_data[i]._id}</td>
    <td>${parsed_user_data[i].name}</td>
    <td>${parsed_user_data[i].email}</td>
    <td>${parsed_user_data[i].password}</td>
    <td value=${parsed_user_data[i]._id}>Edit</td>
    </tr>
    `;
}

console.log("dataComponent : ", dataComponent);

content.innerHTML = dataComponent;

}

getData();
