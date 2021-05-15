const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("connted to mongo");
});

mongoose.connection.on("error", () => {
  console.log("err connecting", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

//OqyLhR3m4g3l9f0c

// const custumMiddleware = (req,res,next)=>{
//     console .log("middleware executed!!")
//     next()
// }

////app.use(custumMiddleware)

// app.get('/', (req, res) => {
//     console.log("home")
//     res.send("helloji")
// })

// app.get('/about',custumMiddleware ,(req, res) => {
//     console.log("about")
//     res.send("about home")
// })

app.listen(PORT, () => {
  console.log("server on", PORT);
});
