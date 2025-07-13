// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const DB_PATH = "Your MongoDB path";

// Local Modules
const storeRouter = require('./routes/storeRouter');
const rootDir = require('./utils/pathUtil');
const {hostRouter} = require('./routes/hostRouter');
const errorsController = require('./controllers/errors');
const { default: mongoose } = require('mongoose');
const authRouter = require('./routes/authRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'sessions',
});

app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded());
app.use(session({
  secret: "my secret",
  resave: false,
  saveUninitialized: true,
  store: store
}));
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if(req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(errorsController.get404);

const PORT = 3000;
mongoose.connect(DB_PATH).then(() => {
  console.log("Connected to Mongo");
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(() => {
  console.log("Failed to connect with mongo");
});
