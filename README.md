
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
---
**NOTE**

It works with almost all markdown flavours (the below blank line matters).

---

```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


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
    