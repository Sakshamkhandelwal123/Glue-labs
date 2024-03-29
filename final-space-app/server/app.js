const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const pubDir = path.join(__dirname, './public');
const viewDir = path.join(__dirname, './templates/views');
const partialsDir = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewDir);
hbs.registerPartials(partialsDir);

app.use(express.static(pubDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Final Space',
        name: 'Saksham Khandelwal'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Saksham Khandelwal'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Saksham Khandelwal'
    })
})

app.listen(8080, () => {
    console.log('Server is up on port 8080');
})