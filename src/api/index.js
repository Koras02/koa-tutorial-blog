const Router = require('koa-router');

const api = new Router();
const talks = require('./talks');

api.use('/talks', talks.routes());

module.exports = api;