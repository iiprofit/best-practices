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
  npm install nodemon chalk dotenv express joy mongoose bcryptjs uuid cors express-validator jsonwebtoken validator
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

## Server Side Validation Setup

We already install the neccesary package express-validator we just need to use it in our application. There are total 3 steps to implement express-validator into the application. All steps mentioned below

1. Write validation code in separate file.For example : If we have employee section in our application then create employeeValidation.ts or employeeValidation.js and write all validation code in it.

2. Now import express-validator library in route file and apply as middle ware in concern routes.

```javascript
// employee validation schema import
import EmployeeSchema2 from "./employeeValidation2";

// Route for update roles
EmployeeRouter.put(
  "/employee/:id",
  EmployeeSchema2.employeeUpdate(),
  EmployeeController.updateEmployee
);
```

3. Check the validation result in controller section. For example : We created one controller called as employeeController.ts. Here we need to import validationResult object and use it in controller method.

```javascript

// ValidationnResult method import for checking express-validator's end result.
import { validationResult } from "express-validator";

 // Create object for the express-validator result checking.
 // Below line will be written in concern method of controller such as create,update etc
 const error = validationResult(req);

 // check the error object imported in above code and write code of next step into that if and outside if write the false statement which return error information.

   if (error.isEmpty()) {
    // Nest Step of the controller code
    //...
    //...
    //...
   }

   // return false statement with error data
       // Return express-validator error result.
    const { code, data, message } = getHandlerResponseObject(
      false,
      httpStatus.Bad_Request,
      "Employee's validation error",
      error
    );
    return res.status(code).json({ code, data, message });

    
```

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Server Directory

Following is the folder structure of server section.

├── src
│ ├── config
│ ├── controller
│ ├── helper
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── Server.ts
├── package.json
└── .gitignore

## Server Setup

This section explain how you can create node js server with best practices.As you can see project structure in above section, this section explain use and importance of each file.

1. config.ts
   -- sfsdfs
2. httpStatus.ts
3. objectReturn.ts
4. userModel.ts
5. userController.ts
6. userRoutes.ts

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
