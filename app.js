const express = require("express");
const { all } = require("express/lib/application");

const PORT = 5000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();

// -- Define your route listeners here! --


app.get("/pokemon", (req, res) => {
    res.json(allPokemon);
  });


   app.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;
    const pk = allPokemon.find((pk) => pk.id == id);
    res.json(pk);
  });


app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
