const connection = require("../config/connection.js");


const orm = {
   
        all: function(burgers, cb) {
          const queryString = "SELECT * FROM " + burgers + ";";
          connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
          });
        },

      //  create:    
      create: function (burger_name) {
        connection.query(`INSERT INTO burgers (burger_name, devoured) VALUES (?, false);`, [burger_name], (err, data) => {
          if (err) throw err
      })
  },



  delete: function (id) {
    const queryString = "DELETE FROM burgers WHERE id = ?";
    connection.query(queryString, [id], function (err, data) {
        if (err) {
            throw err;
        }
    });
}
    
    
    
    
    
    
   
//     update:
    
    
    
    
 }
    
module.exports = orm