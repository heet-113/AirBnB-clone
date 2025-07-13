// External Modules
const express = require('express');
const storeRouter = express.Router();

// Local Modules
const storeController = require('../controllers/storeController');

storeRouter.get("/", storeController.getindex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);

storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post("/favourites", storeController.postAddToFavourite);
storeRouter.post("/favourites/:homeId", storeController.postDeleteFavourite);

module.exports = storeRouter;