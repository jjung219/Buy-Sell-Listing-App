// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
var cookieSession = require('cookie-session');
const morgan     = require('morgan');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))



app.use(bodyParser.json());
app.use(express.static("public"));



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const RegisterRoutes = require("./routes/register");
const widgetsRoutes = require("./routes/widgets");
const searchRoutes = require("./routes/search");
const searchListingRoutes = require("./routes/search-listing");
const myListingsRoutes = require("./routes/my-listings");
const newRoutes = require("./routes/new");
const removeListingRoutes = require("./routes/my-listings-remove");
const markItemRoutes = require("./routes/my-listings-mark-item");
const contactRoutes = require("./routes/contact");
const logoutRoutes = require("./routes/logout");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/search", searchRoutes(db));
app.use("/", searchListingRoutes(db));
app.use("/listings", myListingsRoutes(db));

const loginRoutes = require("./routes/login");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/register", RegisterRoutes(db));
app.use("/widgets", widgetsRoutes(db));
app.use("/new",newRoutes(db));
app.use("/login",loginRoutes(db));
// Note: mount other resources here, using the same pattern above
app.use("/listings", removeListingRoutes(db));
app.use("/listings", markItemRoutes(db));
app.use("/contact", contactRoutes(db));
app.use("/logout", logoutRoutes(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


