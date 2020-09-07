require("dotenv").config();
let express = require("./node_modules/express");
const app = express();
const sequilze = require("./db");

let user = require("./controllers/usercontroller");
let beer = require("./controllers/beercontroller");

sequilze.sync();

app.use(require("./middleware/headers"));

app.use(express.json());

app.use("/", user);
app.use("/beer/", beer);

app.listen(process.env.PORT, function () {
  console.log("App is listening on 3001");
});
