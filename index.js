const express = require("express");
const cors = require("cors");
const dbConnect = require("./app/dbConnection");
const initModels = require('./app/models/init-models');
const sequelize = require('sequelize');

const main = async () => {
  const app = express();
  
  var corsOptions = {
    origin: "http://localhost:3000",
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


  //route dish
  app.get("/dish", async (req, res) => {
    res.json(await models.dish.findAll());
  });

  app.get("/dish/:type", async (req, res) => {
    res.json(await models.dish.findAll({ where: {TYPE_ID: req.params.type}}));
  });

  app.get("/dish_img", async (req, res) => {
    let img = await models.image_dish.findAll();
    res.json(img);
  })

  app.get("/dish_recommend", async (req, res) => {
    res.json(await models.recommend_dish.findAll());
  })

  // route order
  app.post("/order",async (req, res) => {
    const data = req.body;
    console.log(data);
    const table = data.table;
    const currentDishes = data.currentDishes;
    const orders = models.orders;
    const orderDetail = models.order_detail;
    let maxOrderId =await orders.findAll({
      order: [
        ['ORDER_ID', 'DESC']
      ],
      limit: 1
    })
    let newIdOrderCreated = maxOrderId[0].toJSON().ORDER_ID + 1;

    await orders.create({
      ORDER_ID: newIdOrderCreated,
      TABLE_ID: table,
      CREATED_AT: new Date(),
      UPDATED_AT: new Date(),
      STATUS: "CHƯA THANH TOÁN"
    })

    for(let dish of currentDishes) {
      await orderDetail.create({
        ORDER_ID: newIdOrderCreated,
        DISH_ID: dish.DISH_ID,
        QUANTITY: dish.QTY,
        NOTE: dish.NOTE
      })
    }
    
    res.json({code: 200, message: "Oke"})
  })

  app.get('/order', (req, res) =>{
    
  })
  
  app.post("/customer", (req, res) => {

  })

  app.put("/customer", (req, res) => {

  })

  app.delete("/customer", (req, res) => {

  })

  // set port
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port} `);
  });
};

main();
