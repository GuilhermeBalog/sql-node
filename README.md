# SQL Node

API REST with a PostgreSQL database using Sequelize

## Running Locally

**Requirements**

- Node.js
- Yarn or npm
- A PostgreSQL database

Clone the repository and install the dependencies:

```bash
git clone https://github.com/GuilhermeBalog/sql-node.git
cd sql-node

npm install
# or using yarn:
yarn
```

You need to set the environment variables. The easiest way is to copy the file `.env.example` and name it `.env`. Then you put the access information. Don't worry, this file is ignored by git.

After that you can run with `npm start` or `yarn start`. If you want to run in development mode (with Nodemon watching file changes), use the command `npm run dev` or `yarn dev`.
