const express = require("express");
const parser = require("body-parser");
// const cors = require("cors");
// const passport = require("./config/passport")();
const app = express();

app.use(parser.json());
// app.use(passport.initialize());
// app.use(cors());

app.use(require("./routes/index"));
// app.get("/", function(req, res) {
// 	res.send("hello world");
// });

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
	console.log(`Running on PORT: ${app.get("port")}`);
});
