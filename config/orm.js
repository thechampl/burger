var connection = require("./connection.js");


var orm = {
    selectAll: function(tableName){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableName, burger_name, devoured){
        var queryString= "INSERT INTO '??' ('burger_name', 'devoured') VALUES (??, ??)";
        connection.query(queryString, [tableName, burger_name, devoured], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(tableName, col1, value1, col2, value2, condition){
        var queryString= "UPDATE ?? SET ?? = ??, ?? = ??, WHERE ??";
        connection.query(queryString, [tableName, col1, value1, col2, value2, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
    });
}

};

module.exports = orm