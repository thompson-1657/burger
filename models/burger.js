var orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },
}



module.exports = burger;