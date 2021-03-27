var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _customer_promo = require("./customer_promo");
var _dish = require("./dish");
var _image_dish = require("./image_dish");
var _invoice = require("./invoice");
var _invoice_detail = require("./invoice_detail");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _position = require("./position");
var _promo = require("./promo");
var _recommend_dish = require("./recommend_dish");
var _staff = require("./staff");
var _tables = require("./tables");
var _type_of_dish = require("./type_of_dish");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var customer_promo = _customer_promo(sequelize, DataTypes);
  var dish = _dish(sequelize, DataTypes);
  var image_dish = _image_dish(sequelize, DataTypes);
  var invoice = _invoice(sequelize, DataTypes);
  var invoice_detail = _invoice_detail(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var position = _position(sequelize, DataTypes);
  var promo = _promo(sequelize, DataTypes);
  var recommend_dish = _recommend_dish(sequelize, DataTypes);
  var staff = _staff(sequelize, DataTypes);
  var tables = _tables(sequelize, DataTypes);
  var type_of_dish = _type_of_dish(sequelize, DataTypes);

  dish.belongsToMany(orders, { as: 'ORDERs', through: order_detail, foreignKey: "DISH_ID", otherKey: "ORDER_ID" });
  invoice.belongsToMany(orders, { as: 'ORDERs', through: invoice_detail, foreignKey: "INVOICE_ID", otherKey: "ORDER_ID" });
  orders.belongsToMany(dish, { as: 'DISHes', through: order_detail, foreignKey: "ORDER_ID", otherKey: "DISH_ID" });
  orders.belongsToMany(invoice, { as: 'INVOICEs', through: invoice_detail, foreignKey: "ORDER_ID", otherKey: "INVOICE_ID" });
  customer_promo.belongsTo(customer, { as: "CUSTOMER", foreignKey: "CUSTOMER_ID"});
  customer.hasMany(customer_promo, { as: "customer_promos", foreignKey: "CUSTOMER_ID"});
  image_dish.belongsTo(dish, { as: "DISH", foreignKey: "DISH_ID"});
  dish.hasMany(image_dish, { as: "image_dishes", foreignKey: "DISH_ID"});
  order_detail.belongsTo(dish, { as: "DISH", foreignKey: "DISH_ID"});
  dish.hasMany(order_detail, { as: "order_details", foreignKey: "DISH_ID"});
  recommend_dish.belongsTo(dish, { as: "DISH", foreignKey: "DISH_ID"});
  dish.hasMany(recommend_dish, { as: "recommend_dishes", foreignKey: "DISH_ID"});
  invoice_detail.belongsTo(invoice, { as: "INVOICE", foreignKey: "INVOICE_ID"});
  invoice.hasMany(invoice_detail, { as: "invoice_details", foreignKey: "INVOICE_ID"});
  invoice_detail.belongsTo(orders, { as: "ORDER", foreignKey: "ORDER_ID"});
  orders.hasMany(invoice_detail, { as: "invoice_details", foreignKey: "ORDER_ID"});
  order_detail.belongsTo(orders, { as: "ORDER", foreignKey: "ORDER_ID"});
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "ORDER_ID"});
  staff.belongsTo(position, { as: "POSITION", foreignKey: "POSITION_ID"});
  position.hasMany(staff, { as: "staffs", foreignKey: "POSITION_ID"});
  customer_promo.belongsTo(promo, { as: "PROMO", foreignKey: "PROMO_ID"});
  promo.hasMany(customer_promo, { as: "customer_promos", foreignKey: "PROMO_ID"});
  invoice.belongsTo(promo, { as: "PROMO", foreignKey: "PROMO_ID"});
  promo.hasMany(invoice, { as: "invoices", foreignKey: "PROMO_ID"});
  invoice.belongsTo(staff, { as: "STAFF", foreignKey: "STAFF_ID"});
  staff.hasMany(invoice, { as: "invoices", foreignKey: "STAFF_ID"});
  invoice.belongsTo(tables, { as: "TABLE", foreignKey: "TABLE_ID"});
  tables.hasMany(invoice, { as: "invoices", foreignKey: "TABLE_ID"});
  orders.belongsTo(tables, { as: "TABLE", foreignKey: "TABLE_ID"});
  tables.hasMany(orders, { as: "orders", foreignKey: "TABLE_ID"});
  dish.belongsTo(type_of_dish, { as: "TYPE", foreignKey: "TYPE_ID"});
  type_of_dish.hasMany(dish, { as: "dishes", foreignKey: "TYPE_ID"});

  return {
    customer,
    customer_promo,
    dish,
    image_dish,
    invoice,
    invoice_detail,
    order_detail,
    orders,
    position,
    promo,
    recommend_dish,
    staff,
    tables,
    type_of_dish,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
