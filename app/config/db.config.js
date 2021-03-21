const databaseConfig = {
    HOST: 'localhost',
    USER: '',
    PASSWORD: '',
    PORT: 1433,
    DB: 'food_ordering',
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

module.exports = databaseConfig;