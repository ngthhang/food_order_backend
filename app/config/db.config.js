const databaseConfig = {
    HOST: '127.0.0.1',
    USER: 'root',
    PASSWORD: '',
    PORT: 3306,
    DB: 'food_ordering_system',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

module.exports = databaseConfig;