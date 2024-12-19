const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(cors());

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "ucka.veleri.hr",
  user: "nsvecarov",
  password: "11",
  database: "nsvecarov",
});

app.use(express.urlencoded({ extended: true }));

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/api/knjige", (req, res) => {
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
  /*
    req - slanje zahtjeva s klijentske strane
    res - slanje odgovora sa serverske strane

    npm install -g nodemon
*/
  //res.send("popis knjiga");
});

app.get("/api/knjige/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM knjiga WHERE id = ?",
    id,
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
  //res.send("jedna knjiga "+id);
});

app.post("/api/rezerv_knjige", (req, res) => {
  const data = req.body;
  rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]];

  connection.query(
    "INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?",
    [rezervacija],
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );

  //res.send("Poslano "+data.id_knjiga);
});

app.listen(port, () => {
  console.log("Server running at port: " + port);
});