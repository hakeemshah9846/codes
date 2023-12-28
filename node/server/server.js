const http = require('http');
const url = require('url');
const querystring = require('querystring');
const { MongoClient } = require('mongodb');
const { error } = require('console');

const server = http.createServer((req, res) => {

    console.log("url : ", req.url);
    // Parse the request URL
    const parsedUrl = url.parse(req.url);
    console.log("parsedUrl : ", parsedUrl);

    // Serve the HTML file on root request
    if (parsedUrl.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(require('fs').readFileSync('../client/index.html'));
    }

    // Handle form submission on POST request to /submit
    if (req.method === 'POST' && parsedUrl.pathname === '/submit') {

        console.log("reached here...");
        let body = '';

        // Collect data as it comes in chunks
        req.on('data', (chunk) => {
            console.log("chunk : ", chunk);
            console.log(`chunk.toString() : ${chunk} : `, chunk.toString())
            body += chunk.toString();
        });

        // Process the form data on end of the request
        req.on('end', async () => {

            try {
                console.log("body : ", body);
                const formData = querystring.parse(body);
                console.log("formData : ", formData);
    
                // Do something with the submitted data (e.g., save to a database)
                console.log(`Received data: Name - ${formData.name}, Email - ${formData.email}`);

                //Format data
                let name = formData.name;
                console.log("name : ", name);
                let email = formData.email;
                console.log("email : ", email);
                let password = formData.password;
                console.log("password : ", password);

                let data = {
                    name : name,
                    email : email,
                    password : password,
                }

                console.log("data : ", data);

                // let json_data = JSON.stringify(data);
                // console.log("json_data : ", json_data);

                // Connect to mongodb
                const client = new MongoClient("mongodb://127.0.0.1:27017");
                await client.connect()
                    .then((message)=> {
                        console.log("Database connection successful");
                    })
                    .catch((error)=> {
                        console.log("Database error : ", error);
                    });

                    const db = client.db('ums');
                    const collection = db.collection('users');

                    await collection.insertOne(data)
                        .then((messaage)=> {
                            console.log("Document inserted successfully")
                        })
                        .catch((error)=> {
                            console.log("Document not inserted : ", error);
                        })

            //    await MongoClient.connect("mongodb://127.0.0.1:27017",(err, client)=> {
            //         console.log("Mongodb connected...")
            //         if(err) {

            //             console.error('Error connecting to mongodb : ', err);
            //             return;
            //         }else {
            //             console.log("Mongodb connected successfully");
            //         }
            //     })

    
                // Send a response (you can customize this based on your needs)
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Form submitted successfully!');
                
            } catch (error) {
                console.log("Error : ", error);
            }

        });
    }
    
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
