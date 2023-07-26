# Full Stack Best Practices

This project contain all the best practice's we should consider while developing the project.I use Node js as back-end and React js as front end language. This documentation consist all steps such as set up project to deploy the project on the server.

## Project Setup Guideline

Please follow the below steps to setup your project.You need to first create one folder and in that folder perform following steps.

Initialize the node project in your root direcotry

```bash
  npm init -y
```

install concurrently

```bash
  npm install concurrently
```

Create following 2 folders

```bash
  client
  server
```

Initialize the Node project in server folder

```bash
  npm init -y
```

Install following packages

```bash
  npm install ts-node typescript
  npm install nodemon chalk dotenv express joy mongoose bcryptjs uuid cors express-validator jsonwebtoken
  npm install @types/express @types/uuid @types/cors
```

Add typescript configuration file. You can use this project's file as well or download from typescript's official website. Use following settings for the configuration file

```json
{
  "compilerOptions": {
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "outDir": "./build" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

Create src folder in server directory and add server.ts file. Create server in that file or use following code.

```typescript
/**
 * Installed Library imports
 * @express this is base library which is mandatory for creating express js structure
 * @http this library is used to create server
 *  */
import express from "express";
import http from "http";
// Router object
const router = express();

http
  .createServer(router)
  .listen(8081, () => console.log(`Server is running on Port ${8181}.`));
```

Update package.json file in server directory

```json

"main" : "src/server.ts",
"script" : {
    "build": "rd /s /q build",
    "start": "tsc && node build/server.js",
    "dev": "tsc && node build/server.js"
}
```

Initialize the React project in client folder

```bash
  npx create-react-app .
```

Configure concurrently in root direcotry

```json
    "server": "npm run dev --prefix server",
    "client": "npm start --prefix client",
    "start": "concurrently \"npm run server\"  \"npm run client \" "
```

Start project using following command

```bash
  npm start
```

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Installation

Following is the folder structure of server section.

├── src
│   ├── config
│   ├── controller
│   ├── helper
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── Server.ts
├── package.json 
└── .gitignore



## Temp

Introduction
Index
Project Setup
Library list
Project Structure

## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
