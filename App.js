const express = require ("express")
const dotenv = requrire ("dotenv")
dotenv.config();

const app = express();
const port = process.env.port;

app.listen(port,()=> console.log(`server is on port ${port}`));





