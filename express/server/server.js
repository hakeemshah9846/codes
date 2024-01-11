//Explain what is a REST API before starting express
//Explain what is express
const express = require('express');
const app = express();
const port = 5000;

console.log(__dirname);
//Server static files
app.use('/',express.static(__dirname + '/../client'));

//Middleware to parse formData
app.use(express.urlencoded({extended : true}));

//Middleware to parse JSON
app.use(express.json())

//Route to handle form submission
app.post('/submit',(req, res)=> {
    const body = req.body;
    console.log("body : ", body);
    
})

app.listen(port, ()=> {
    console.log(`Server runnng at http://localhost:${port}`);
});