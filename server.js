const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', expressHandlebars({

    defaultLayout: 'main'

}));

app.set('view engine', 'handlebars');



app.listen(port, () => console.log(

    `Express started on http://localhost:${port}; ` +
    `press Crtl-C to terminate.`

));




