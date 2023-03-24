const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const hbs = require('hbs');



const public_path = path.join(__dirname, 'PUBLIC');
const templates = path.join(__dirname, 'templates/views');
const partials = path.join(__dirname, 'templates/partials');
app.use(express.static(public_path));

app.set('view engine', 'hbs');   //setting view engine as hbs
app.set('views', templates);
hbs.registerPartials(partials);   


app.get("/", (req, res) => {
    res.render('index');
})
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("*", (req, res) => {
    res.render("404");
})
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})