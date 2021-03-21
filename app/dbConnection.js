const databaseConfig = require("./config/db.config.js");
const Sequelize = require("sequelize");
const initModels = require("./models/init-models");

const dbConnect = () => {

    // create db connection
    const sequelize = new Sequelize(
        databaseConfig.DB,
        databaseConfig.USER,
        databaseConfig.PASSWORD,
        {
            host: databaseConfig.HOST,
            dialect: databaseConfig.dialect,
            operatorsAliases: false,
            port: databaseConfig.PORT,
            pool: {
                max: databaseConfig.pool.max,
                min: databaseConfig.pool.min,
                acquire: databaseConfig.pool.acquire,
                idle: databaseConfig.pool.idle,
            },
        }
    );
    const database = {};
    database.models = initModels(sequelize);

    database.Sequelize = Sequelize;
    database.sequelize = sequelize;



    return database;
}

module.exports = dbConnect ;