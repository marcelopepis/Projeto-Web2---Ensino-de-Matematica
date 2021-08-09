const express = require('express');
const SessionController = require('./controllers/SessionController');
const ClassesController = require('./controllers/ClassesController');

const routes = express.Router();

routes.post('/users', SessionController.store);
routes.post('/login', SessionController.login);
routes.post('/classes', ClassesController.store);
routes.get('/listClasses', ClassesController.listClasses);
routes.get('/listClassMembers', ClassesController.listClassMembers);

module.exports = routes;