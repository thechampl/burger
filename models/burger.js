var orm= require ("../config/orm.js");

orm.selectAll("burgers");


// update with onclick function and var burgername
orm.insertOne("burgers", burgerName, false);

orm.updateOne("burgers", "burger_name", burger_name, "devoured", true, onclick);

module.exports = burger