const connection = require("../config/connection.js");


const orm = {

    // selectAll: function(cb) {
    //     const query = SELECT * FROM burgers"
    //     connect.query(query, function(err, data) {
    //         if (err) {
    //             throw err
    //         }
    //         cb(data)
    //     })
    // },

   
        all: function(burgers, cb) {
          var queryString = "SELECT * FROM " + burgers + ";";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        }

    // insertOne: function(table, cols, vals, cb) {
    //     const query = "INSERT INTO" + table
    // },
    
    
    
    
    
    
   
//     updateOne()
    
    
    
    
 }
    
module.exports = orm