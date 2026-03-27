# FurinaIndex - 极客范儿的浏览器全栈主页 🚀

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://vercel.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4fc08d?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-2.x-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql)](https://www.mysql.com/)

[English](./README_EN.md) | 中文

 本项目是一个基于 **Vue 3 + Vite + Node.js (Express) + MySQL** 打造的极客风格浏览器主页。它将传统的图形化界面抽象为**交互式终端**，通过简单的命令即可高效完成搜索、翻译、听歌、任务管理等日常操作。

> **项目亮点**：全栈 Serverless 架构，支持一键部署至 Vercel，接入云端 MySQL，实现数据的云端持久化。

---

## 🛠️ 技术架构

本项目采用前后端分离架构，并针对 Serverless 环境进行了深度优化：

- **前端**：Vue 3 + Vite + TypeScript + Pinia + Ant Design Vue。利用 `getopts` 实现类 shell 的参数解析引擎。
- **后端**：Node.js + Express。采用无状态设计，适配 Vercel Serverless Functions。
- **数据库**：MySQL (Sequelize ORM)。通过云数据库实现用户信息及任务数据的持久化。
- **部署**：前端静态资源 CDN 加速，后端 API 自动化重写与部署。

---

## ✨ 核心功能演示

| 功能模块 | 命令示例 | 说明 |
| :--- | :--- | :--- |
| **全能搜索** | `search -f github vue` | 支持 GitHub, Google, 百度, 知乎等 10+ 引擎 |
| **用户系统** | `user login -u test -p 123` | 完整的注册、登录及个人设置持久化 |
| **效率工具** | `todo add -n "写代码"` | 内置待办事项管理，支持云端同步 |
| **多媒体** | `music "周杰伦"` | 接入网易云音乐，直接在终端内播放 |
| **极客工具** | `ping google.com` | 模拟网络连通性测试 |
| **个性化** | `background -u [url]` | 支持自定义或随机切换终端背景壁纸 |

---

## 🚀 快速开始

### 1. 环境要求
- Node.js >= 16
- MySQL >= 8.0

### 2. 克隆项目
```bash
git clone https://github.com/FurinaLuna/zcwindex.git
cd zcwindex
```

### 3. 配置环境变量
在根目录创建 `.env` 文件：
```env
DB_HOST=你的数据库地址
DB_USER=用户名
DB_PASSWORD=密码
DB_NAME=defaultdb
DB_PORT=26686
```

### 4. 安装并运行
```bash
# 安装依赖
npm install

# 运行前端 (Vite)
npm run dev
```

---

## 📂 目录结构

```text
.
├── api/                # Vercel Serverless 入口
├── src/                # 前端源码
│   ├── core/           # 核心引擎 (命令解析、注册、执行)
│   ├── components/     # UI 组件 (Terminal 主体、Box 渲染器)
│   └── plugins/        # 插件配置 (Axios, Dayjs)
├── server/             # 后端源码
│   ├── src/            # Express 业务逻辑 (路由、控制器、服务)
│   └── db/             # 数据库初始化脚本 (DDL)
├── vercel.json         # Vercel 部署配置
└── .env                # 环境变量 (不进入 Git)
```


## ☁️ 部署说明 (Vercel)

本项目已完美适配 Vercel：
1. 在 Vercel 导入仓库。
2. 在 `Settings -> Environment Variables` 中配置上述 `.env` 变量。
3. 点击 `Deploy` 即可完成全栈部署。

---

## 👨‍💻 作者

**FurinaLuna**
- GitHub: [FurinaLuna](https://github.com/FurinaLuna)
- 邮箱: [2517523791@qq.com](mailto:2517523791@qq.com)
- 博客: [FurinaLuna](https://furinaluna.top)

---

## 📄 开源协议
本项目遵循 MIT 协议。
