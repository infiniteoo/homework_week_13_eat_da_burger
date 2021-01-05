/**
 * BASIC SERVER CONFIGURATION 
 */

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000


/**
 * MIDDLEWEAR
 */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


/**
 * HANDLEBARS INTEGRATION
 */

app.engine('handlebars', expressHandlebars({

    defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');


/**
 * ROUTE INTEGRATION
 */

const routes = require('./controllers/burgers_controller');
app.use(routes);


/**
 * LAUNCH THE SERVER
 */

app.listen(port, () => console.log(

    `Express started on http://localhost:${port}; ` +
    `press Crtl-C to terminate.`

));