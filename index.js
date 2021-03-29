const express = require("express");
const cors = require("cors");
const dbConnect = require("./app/dbConnection");
const initModels = require('./app/models/init-models');
const sequelize = require('sequelize');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
      STATUS: "ĐANG CHẾ BIẾN"
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

  app.get('/order/table/:table',async (req, res) =>{
    const order = await models.orders.findAll({ where:
      {
        TABLE_ID: req.params.table,
        [Op.or]: [{ STATUS: 'ĐANG CHẾ BIẾN' }, { STATUS: 'CHỜ THANH TOÁN' }],
      } 
    })
    res.json(order)
  })

  app.get('/order_detail/:id' , async (req, res) =>{
    res.json(await models.order_detail.findAll({where:
      {ORDER_ID: req.params.id}
    }))
  })

  app.get("/dish_price/:id", async (req, res) =>{
    res.json(await models.dish.findAll({where:{
      DISH_ID: req.params.id
    }}))
  })

  // handle login user
  app.post('/login', async (req, res) =>{
    let staff = await models.staff.findOne({
      where:{
          EMAIL: req.body.email,
      }
    })

    if(!staff){
      return res.status(404).json({message: 'Email không tìm thấy'})
    }
    
    let staffPassword = staff.PASSWORD
    const match = bcrypt.compareSync(String(req.body.password), String(staffPassword));

    if(!match){
      return res.status(404).json({message: 'Email hoặc mật khẩu không đúng'})
    }

    // check token if exist
    const auth = models.auth
    let staffAuth =await auth.findOne({
      where: {
        STAFF_ID: staff.STAFF_ID
      }
    })
    console.log('staff: ', staff);

    if(staffAuth){
      return res.status(200).json({ token: staffAuth.TOKEN, staffId: staffAuth.STAFF_ID, staffPosition: staff.dataValues.POSITION_ID })
    }

    const payLoad = {
      staffId: staff.STAFF_ID,
      timestamps: new Date().getTime(),
      email: staff.EMAIL
    };

    console.log('PAYLOAD: ', payLoad);

    // generate token
    const token = jwt.sign(
      payLoad,
      'code_esdc');
    
      console.log(token);

    let maxId = await auth.findAll({
      order: [
        ['AUTH_ID', 'DESC']
      ],
      limit: 1
    })

    let newAuthId; 

    if(maxId.length > 0){
      newAuthId = maxId[0].toJSON().AUTH_ID + 1;
    } else{
      newAuthId = 1
    }

    await auth.create({
      AUTH_ID: newAuthId,
      STAFF_ID: staff.STAFF_ID,
      TOKEN: token,
    })

    console.log("STAFF AUTH: ", staff);

    return res.status(200).json({ token: token, staffId: staff.STAFF_ID, staffPosition: staff.dataValues.POSITION_ID})
  })

  // get current staff login
  app.get('/staff_login/:token', async (req, res) =>{
    let auth = await models.auth.findOne({ where: {
      TOKEN: req.params.token
    }})
  

    let staff = await models.staff.findOne({
      where:{
        STAFF_ID: auth.dataValues.STAFF_ID
      }
    })
    res.json(staff.dataValues);
  })

  // get all order pending
  app.get('/staff_order', async (req, res) =>{
    let orders = await models.orders.findAll({
      where: {
        STATUS: 'ĐANG CHẾ BIẾN'
      }
    })
    console.log(orders);
    res.json(orders);
  })

  app.get('/staff_order/:id', async (req, res) => {
    let orderDetails = await models.order_detail.findAll({
      where: {
        ORDER_ID: req.params.id
      }
    })
    let result = []
    for(let i of orderDetails){
      let dish = await models.dish.findOne({
        where: {
          DISH_ID: i.DISH_ID
        }
      })
      result.push({
        'key': i.DISH_ID,
        'DISH_NAME': dish.dataValues.NAME,
        'DISH_ID': i.DISH_ID,
        'QUANTITY': i.QUANTITY,
        'ORDER_ID': i.ORDER_ID,
        'NOTE': i.NOTE
      })
    }
    console.log(result);
    res.json(result);
  })

  app.get('/table/:orderId', async(req, res) => {
    let data =await models.orders.findOne({
      where: {
        ORDER_ID: req.params.orderId
      }
    })
    res.json(data.dataValues.TABLE_ID);
  })

  app.get('/order_complete/:id', async(req, res) => {
    let order = await models.orders.findOne({
      where: {
        ORDER_ID: req.params.id
      }
    })

    if(order){
      await order.update({
        STATUS: 'CHỜ THANH TOÁN'
      })
    }
    res.json(order)
  })

  app.get('/tables', async(req, res) => {
    let tables = await models.tables.findAll();
    res.json(tables)
  })

  app.get('/update_status/:table', async(req, res) => {
    let orders = await models.orders.findAll({ where: {TABLE_ID: req.params.table}});
    if(orders){
    for(let order of orders){
      order.update({
        STATUS: 'ĐÃ THANH TOÁN'
      })
    }
    }
    res.json({message: 'Cập nhập thành công'})
  })

  // set port
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port} `);
  });
};

main();
