const express = require ("express");
const hbs = require("hbs");
const path = require ("path");
const { env } = require("process");

const port = process.env.PORT || 3000;

const app = express ();
app.set("view engine", "hbs");

// const templatePath = path.join(__dirname, "../template/views")
const staticPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../partials");

app.use(express.static(staticPath));
// app.set("views", templatePath);
hbs.registerPartials(partialsPath);



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen ( port, () => {
    console.log(`Listening at ${port}`);
});