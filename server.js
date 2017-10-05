//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set port to 3000 or other available
var port = process.env.PORT || 3000;

//create instance of express app
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Set Handlebars as default
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger-controller.js");

app.use("/", routes);

// Initialize the listener
app.listen(port, function() {
	console.log("App listening on PORT " + port);
});