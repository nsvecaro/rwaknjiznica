const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'ucka.veleri.hr',
    user: 'nsvecarovski',
    password: '11',
    database: 'database'
  });





app.get("/api/knjige", (req, res) => {
/*    connection.query("SELECT * FROM knjige", (error, results) => {
      if (error) throw error;
      res.send(results);
    }); 

    req - request - slanje sa klijentke strane
    res - response - slanje odgovora sa serverske strane  

    npm install -g nodemon

*/
   res.send("popis knjiga");
  });
  
  app.get("/api/knjige/:id", (req,res)=>{
    const id=req.params.id;
    res.send("Jedna knjiga "+id);
  });

  app.post("/api/rezerv_knjige", (req, res) => {
    const data = req.body;
    rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]
    

    connection.query("INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      res.send(results);
    });

    
   res.send("Poslano "+data.id_knjiga);
  });
  
app.use(express.urlencoded({ extended: true }));
/*

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

*/
  app.listen(port, () => {
    console.log("Server running at port: " + port);
});