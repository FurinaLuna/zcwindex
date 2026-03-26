/**
 * 默认配置
 * @author FurinaLuna
 */
module.exports = {
  // MySQL 配置
  dbConfig: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // 允许自签名证书或非严格校验，解决大部分云数据库连接问题
      },
    },
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: process.env.BAIDU_FANYI_APPID,
    key: process.env.BAIDU_FANYI_KEY,
  },
};
