const db = require("./models/index.js");

const express = require("express");
const app = express();
const cors = require("cors");
const { GameResults } = require("./models/index.js");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/PlayerHand", (req, res) => {
  db.PlayerHand.findAll({
    where: {},
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/TablePlayer/", (req, res) => {
  db.TablePlayer.findAll()
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/deck/", (req, res) => {
  db.Deck.findAll({
    where: {},
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/tableinfo/", (req, res) => {
  db.TableInfo.findAll({
    where: {},
    order: [["ID", "DESC"]],
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});
app.get("/transactions/", (req, res) => {
  db.Transactions.findAll()
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/users/", (req, res) => {
  db.Users.findAll({
    where: {},
    order: [["ID", "DESC"]],
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.get("/tables/", (req, res) => {
  db.Tables.findAll({
    where: {},
  })
    // When we omit curly braces in arrow functions, the return keyword is implied.
    .then((queryResults) => res.send(queryResults))

    .catch((error) => console.log(error));
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
