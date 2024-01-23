const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4500;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Creating a schema
const schema = new mongoose.Schema({
  name: String,
  email: {
    type : String,
    required : true,
    unique : true,
  },
  password: String,
});

//Converting schema definition to a model
const model = mongoose.model("ums", schema);

app.get("/test", (req, res) => {
  res.status(200).send("Test success");
});

app.post("/submit", async (req, res) => {
  try {
    const body = req.body;
    console.log("body : ", body);

    await model.create(body);

    res.status(201).send("Success");
  } catch (error) {
    console.log("error : ", error);
    res.status(400).send("Failed");
  }
});

async function connect() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/ums")
    .then((message) => {
      console.log("Database connectin established");
    })
    .catch((error) => {
      console.log("Database not connected : ", error);
    })
    .finally(() => {
      app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
      });
    });
}

connect();
