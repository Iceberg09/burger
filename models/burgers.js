var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(req, res) {
            cb(res);
        });
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne(burgerId, function(req, res) {
            cb(res);
        })
    }
};

module.exports = burgers;

