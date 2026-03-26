# FurinaIndex - Geeky Full-stack Browser Homepage 🚀

[![Vercel Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://vercel.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4fc08d?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-2.x-646cff?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql)](https://www.mysql.com/)

English | [中文](./README.md)

`FurinaIndex` is a geeky browser homepage built with **Vue 3 + Vite + Node.js (Express) + MySQL**. It abstracts the traditional GUI into an **interactive terminal**, allowing users to efficiently perform daily tasks like searching, translating, music playing, and task management via simple commands.

> **Highlight**: Full-stack Serverless architecture, supporting one-click deployment to Vercel, integrated with Cloud MySQL for cloud-based data persistence.

---

## 🛠️ Tech Stack

This project adopts a decoupled architecture and is deeply optimized for Serverless environments:

- **Frontend**: Vue 3 + Vite + TypeScript + Pinia + Ant Design Vue. Uses `getopts` for a shell-like parameter parsing engine.
- **Backend**: Node.js + Express. Stateless design, compatible with Vercel Serverless Functions.
- **Database**: MySQL (Sequelize ORM). Cloud database integration for user profiles and task data persistence.
- **Deployment**: Frontend static assets accelerated by CDN, backend APIs with automatic rewriting and deployment.

---

## ✨ Core Features Demo

| Feature | Command Example | Description |
| :--- | :--- | :--- |
| **All-in-one Search** | `search -f github vue` | Supports 10+ engines including GitHub, Google, Baidu, Zhihu |
| **User System** | `user login -u test -p 123` | Full registration, login, and profile persistence |
| **Efficiency Tools** | `todo add -n "Coding"` | Built-in task management with cloud sync |
| **Multimedia** | `music "Jay Chou"` | Netease Cloud Music integration, play directly in terminal |
| **Geeky Tools** | `ping google.com` | Simulates network connectivity testing |
| **Personalization** | `background -u [url]` | Custom or random terminal background wallpapers |

---

## 🚀 Quick Start

### 1. Requirements
- Node.js >= 16
- MySQL >= 8.0

### 2. Clone the Project
```bash
git clone https://github.com/FurinaLuna/zcwindex.git
cd zcwindex
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
DB_HOST=your_db_host
DB_USER=username
DB_PASSWORD=password
DB_NAME=defaultdb
DB_PORT=26686
```

### 4. Install & Run
```bash
# Install dependencies
npm install

# Run frontend (Vite)
npm run dev
```

---

## 📂 Project Structure

```text
.
├── api/                # Vercel Serverless entry point
├── src/                # Frontend source code
│   ├── core/           # Core engine (parsing, registration, execution)
│   ├── components/     # UI components (Terminal, Box renderers)
│   └── plugins/        # Plugin configs (Axios, Dayjs)
├── server/             # Backend source code
│   ├── src/            # Express logic (routes, controllers, services)
│   └── db/             # Database scripts (DDL)
├── vercel.json         # Vercel deployment config
└── .env                # Env variables (ignored by Git)
```

---

## 🛡️ Key Code: Command Parsing Engine

The core of this project lies in accurately parsing user input strings into executable commands and their parameters.

```typescript
// src/core/commandExecutor.ts
export const doCommandExecute = async (text: string, terminal: TerminalType) => {
  text = text.trim();
  const command = getCommand(text); // Matches registered commands
  const parsedOptions = doParse(text, command.options); // Parses parameters using getopts
  
  // Supports infinite levels of nested subcommands
  if (command.subCommands) {
    await doSubCommandExecute(text, terminal, command);
    return;
  }
  
  await doAction(command, parsedOptions, terminal); // Executes business logic
};
```

---

## ☁️ Deployment (Vercel)

Perfectly adapted for Vercel:
1. Import the repository on Vercel.
2. Configure the `.env` variables in `Settings -> Environment Variables`.
3. Click `Deploy` for full-stack deployment.

---

## 👨‍💻 Author

**FurinaLuna**
- GitHub: [FurinaLuna](https://github.com/FurinaLuna)
- Email: [2517523791@qq.com](mailto:2517523791@qq.com)
- Blog: [FurinaLuna](https://furinaluna.top)

---

## 📄 License
This project is licensed under the MIT License.
