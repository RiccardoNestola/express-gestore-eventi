const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// import
const _404error = require("./middlewares/error404");
const _500error = require("./middlewares/error500");



const eventsRoutes = require('./routers/eventsRoutes');


// configuro express per leggere i dati in formato json
app.use(express.json());

// configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// configuro i file statici
app.use(express.static("public"));

// Definiamo le rotte degli eventi
app.use('/events', eventsRoutes);

// errori

//  500
app.use(_500error);

//  404
app.use(_404error);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
});
