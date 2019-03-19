const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
//const passport = require("passport");
const app = express();

app.use(parser.json());
//require("./config/passport")(passport);
//app.use(passport.initialize());
app.use(cors());

app.use(require("./routes/index"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
	console.log(`Running on PORT: ${app.get("port")}`);
});
