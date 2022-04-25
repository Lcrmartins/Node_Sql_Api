const sequelize = require('sequelize');

const database = new sequelize('BaseNodeAula', 'sa', '1234@321',
    {
        dialect: 'mssql', host: '127.0.0.1', port: 1433
    });
    
database.sync();
    
module.exports = database;