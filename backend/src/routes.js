const express = require('express');
const SessionController = require('./controllers/SessionController');
const ClassesController = require('./controllers/ClassesController');
const ScoreController = require('./controllers/ScoreController');

const routes = express.Router();

routes.post('/users', SessionController.store);
routes.post('/login', SessionController.login);
routes.post('/classes', ClassesController.store);
routes.post('/listClasses', ClassesController.listClasses);
routes.post('/listclassmembers', ClassesController.listClassMembers);
routes.post('/updateright', ScoreController.updateRight);
routes.post('/updatewrong', ScoreController.updateWrong);

module.exports = routes;