const express = require("express");
const app = express();
const db = require('./src/models/bancoDados');


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{

    res.json({message: "Welcome to bezkoder application." });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });

   
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });