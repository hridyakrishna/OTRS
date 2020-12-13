const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const connectStore = require('connect-mongo');

const restaurantRoutes = require('./Api_Restaurant/R_routes');

const PORT = 8080;
const MONGO_PORT = process.env.DB_SVC_SERVICE_SERVICE_PORT || "3000";
const MONGO_HOST = process.env.DB_SVC_SERVICE_SERVICE_HOST || "172.17.0.1""
const MONGO_URI = 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT + '/SelecTableDB';
SESS_NAME = 'sid';
SESS_SECRET = 'session_secret_change';
SESS_LIFETIME = 1000 * 60 * 60 * 2;


(async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected');

    const app = express();
    const MongoStore = connectStore(session);

    app.disable('x-powered-by');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(
      session({
        name: SESS_NAME,
        secret: SESS_SECRET,
        saveUninitialized: false,
        resave: false,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: 'session',
          ttl: Number(SESS_LIFETIME) / 1000,
        }),
        cookie: {
          sameSite: true,
          secure: process.env.MODE === 'production',
          maxAge: Number(SESS_LIFETIME),
        },
      })
    );

    app.use('/api/restaurant', restaurantRoutes);

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
