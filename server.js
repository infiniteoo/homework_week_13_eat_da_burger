/**
 * B A S I C  S E R V E R  C O N F I G U R A T I O N  
 */

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000


/**
 * M I D D L E W E A R
 */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


/**
 * H A N D L E B A R S   I N T E G R A T I O N 
 */

app.engine('handlebars', expressHandlebars({

    defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');


/**
 * R O U T E    I N T E G R A T I O N 
 */

const routes = require('./controllers/burgers_controller');
app.use(routes);


/**
 * L A U N C H    T H E    S E R V E R 
 */

app.listen(port, () => console.log(

    `Express started on http://localhost:${port}; ` +
    `press Crtl-C to terminate.`

));