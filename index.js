const express = require("express");
const cors = require("cors");
const dbConnect = require("./app/dbConnection");
const initModels = require('./app/models/init-models');

const main = async () => {
  const app = express();
  
  var corsOptions = {
    origin: "https://localhost:8081",
  };

  app.use(cors(corsOptions));

  // parse request to json type
  app.use(express.json());

  // parse requests of application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  // database connection
  const database = dbConnect();
  await database.sequelize.authenticate();

  const models = database.models;
  const Customer = models.customer;
  const Dish = models.dish;
  const Staff = models.staff;
  const Images = models.images;
  const Invoice = models.invoice;
  const InvoiceDetail = models.invoice_detail;
  const Promo = models.promo;
  const Tables = models.tables;
  const TypeOfDish = models.type_of_dish;


  //route
  app.get("/customer/:id?", async (req, res) => {
  // console.log("customer: " + JSON.stringify(customers));
  });
  
  app.post("/customer", (req, res) => {

  })

  app.put("/customer", (req, res) => {

  })

  app.delete("/customer", (req, res) => {

  })

  // set port
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port} `);
  });
};

main();
