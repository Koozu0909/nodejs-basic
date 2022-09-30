import express from "express";
import configViewEngine from "./configs/viewEngine"
import initWebRoute from "../src/route/web"
// import connection from "../src/configs/connectDB"

require('dotenv').config();

const app = express()
const port = process.env.PORT || 3005;
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup view engine
configViewEngine(app);
// init Web Route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})