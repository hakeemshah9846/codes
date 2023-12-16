// Function to simulate fetching user data using a promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data from a server)
        //If we doesn't use promise here due to asynchronous behaviour of javascript setTimeOut will be saved in a web space environment and remaining will be executed, and the function call will do nothing or gives undefined
        setTimeout(() => {
            const users = [
                { id: 1, name: 'John Doe', age: 25 },
                { id: 2, name: 'Jane Smith', age: 30 },
                { id: 3, name: 'Bob Johnson', age: 22 }
            ];

            const user = users.find(user => user.id === userId);

            if (user) {
                resolve(user); // Resolve the promise with the user data
            } else {
                reject(new Error('User not found')); // Reject the promise with an error
            }
        }, 1000); // Simulate a delay of 1 second
    });
}

// Function to display user information on the web page
function displayUser(user) {
    const userContainer = document.getElementById('user-container');

    const userElement = document.createElement('div');
    userElement.innerHTML = `<h2>${user.name}</h2><p>Age: ${user.age}</p>`;
    userContainer.appendChild(userElement);
}

// Call the function to fetch user data using promises
fetchUserData(2)
    .then(user => {
        // Success: Display user information
        displayUser(user);
    })
    .catch(error => {
        // Error: Handle the error (e.g., display an error message)
        console.error('An error occurred:', error.message);
    });
