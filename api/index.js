const { CloudBaseRunServer } = require("../server/src/server");
const routes = require("../server/src/routes");

const server = new CloudBaseRunServer();

// 注册接口路由
for (const route of routes) {
  server.setRoute(route.path, route.handler);
}

// 导出 Express 实例供 Vercel 使用
module.exports = server.app;
