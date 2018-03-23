var burger = require ("../models/burger.js");
const express = require('express');
const app = express();
var orm = require("../config/orm");

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/burger", function (req, res) {
    orm.selectAll("burgers")
    if (err){
        return res.status(500).end();    
    }
    res.render("index", {burger: data});

    });



