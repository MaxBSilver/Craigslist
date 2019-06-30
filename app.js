const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

const port = process.env.PORT || 3000;

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).send("hello max");
});

app.get("/api/v1/missedconnections", (request, response) => {
  database("missedConnections")
    .select()
    .then(missedConnections => {
      response.status(200).json(missedConnections);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
