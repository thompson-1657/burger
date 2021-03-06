const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
      },

 create: function(cb) {
    orm.create(cb, function(res) {
      cb(res);
    });
  },

  update: function(cb) {
    orm.update(cb, function(res) {
      cb(res);
    });
  },

  delete: function(cb) {
    orm.delete(cb, function (res) {
        cb(res)
    })
  }
};

module.exports = burger;