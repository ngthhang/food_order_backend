var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _customer_promo = require("./customer_promo");
var _dish = require("./dish");
var _images = require("./images");
var _invoice = require("./invoice");
var _invoice_detail = require("./invoice_detail");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _position = require("./position");
var _promo = require("./promo");
var _reccommend_dish = require("./reccommend_dish");
var _staff = require("./staff");
var _tables = require("./tables");
var _type_of_dish = require("./type_of_dish");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var customer_promo = _customer_promo(sequelize, DataTypes);
  var dish = _dish(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var invoice = _invoice(sequelize, DataTypes);
  var invoice_detail = _invoice_detail(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var position = _position(sequelize, DataTypes);
  var promo = _promo(sequelize, DataTypes);
  var reccommend_dish = _reccommend_dish(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var tables = _tables(sequelize, DataTypes);
  var type_of_dish = _type_of_dish(sequelize, DataTypes);


  return {
    customer,
    customer_promo,
    dish,
    images,
    invoice,
    invoice_detail,
    order_detail,
    orders,
    position,
    promo,
    reccommend_dish,
    staff,
    tables,
    type_of_dish,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
