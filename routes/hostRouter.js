// External Modules
const express = require('express');

// Local Modules
const hostController = require('../controllers/hostController');

const hostRouter =  express.Router();

hostRouter.get('/add-home', hostController.getAddHome);
hostRouter.post('/add-home', hostController.postAddHome);
hostRouter.get('/host-home-list', hostController.getHostHomes);
hostRouter.get('/edit-home/:homeId', hostController.getEditHome);
hostRouter.post('/edit-home', hostController.postEditHome);
hostRouter.post('/delete-home/:homeId', hostController.postDeleteHome);

exports.hostRouter = hostRouter;