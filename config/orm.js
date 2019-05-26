var connection = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    insertOne: function(burger_name, cb) {
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES ("?", false)';
        connection.query(queryString, burger_name, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    updateOne: function(burgerId, cb) {
        var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?';
        connection.query(queryString, burgerId, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    }
};

module.exports = orm;