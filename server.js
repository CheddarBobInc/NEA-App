const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cpalmer:OvBVJHQGMRVMR7yh@cluster0.x1qjsou.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const express = require('express');
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})