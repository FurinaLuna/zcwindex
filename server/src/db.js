const { Sequelize } = require("sequelize");
require("mysql2");
const { dbConfig } = require("./config/getConfig");

/**
 * 创建数据库实例
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: "mysql",
    dialectOptions: dbConfig.dialectOptions,
    logging: false, // 生产环境关闭日志
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL client connected");
  })
  .catch((e) => {
    console.error("Unable to connect to MySQL", e);
  });

module.exports = sequelize;
