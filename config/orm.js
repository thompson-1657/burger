const { connect } = require("../config/connection.js");
const connection = require("../config/connection.js");


const orm = {

    selectAll: function(tableInput, cb) {
        const query = "SELECT * FROM" + tableInput + ";";
        connect.query(query, function(err, result) {
            if (err) {
                throw err
            }
            cb(result)
        })
    },

    insertOne: function(table, cols, vals, cb) {
        const query = "INSERT INTO" + table
    },
    
    
    
    
    
    
   
    updateOne()
    
    
    
    
};
    
module.exports = orm;