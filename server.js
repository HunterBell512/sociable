// set up the server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// connect to the database
const db = require('./config/connection');

// import the routes
const routes = require('./routes');

// set up the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);

app.once('open', () => {
    app.listen(() => {
        console.log(`App is listening on port ${PORT}`)
    });
});
