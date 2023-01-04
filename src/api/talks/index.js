// const Router = require('koa-router');

// const talks = new Router();

// talks.get('/', (ctx, next) => {
//     ctx.body = 'GET ' + ctx.request.path;
// })

// module.exports = talks;

// 여러 메소드 사용
const Router = require('koa-router');

const talks = new Router();
const talksCtrl = require('./talks.controller');

talks.get('/1', talksCtrl.list);
talks.post('/2', talksCtrl.create);
talks.delete('/', talksCtrl.delete);
talks.put('/', talksCtrl.replace);
talks.patch('/', talksCtrl.update);


module.exports = talks;
// const handler = (ctx, next) => {
//     ctx.body = `${ctx.request.method} ${ctx.request.path}`;
// };

// talks.get('/', handler);

// talks.post('/', handler);

// talks.delete('/', handler);

// talks.put('/', handler);
