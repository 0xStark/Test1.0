const Sequelize = require('sequelize')
const config = require('../secrets/config.js')

const dbConfig = config;
console.log('dbConfig')
console.log(dbConfig)
const sequelize = new Sequelize(dbConfig.schema, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mariadb',
    dialectOptions: {
      // Your mariadb options here
      connectTimeout: 1000,
      underscored:false
    }
  });

module.exports = sequelize