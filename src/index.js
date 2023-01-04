// const Koa = require('koa');
// const Router = require('koa-router');

// const app = new Koa();
// const router = new Router();

// 1. 헬로 솔저 서버에 console 과 body 텍스트 띄우기
// app.use(ctx => {
//     ctx.body = "Hellso sKoa nice me to!!";
// });

// app.listen(4000, () => {
//     console.log("koa server is listent to port 4000");
// })

// 2. 미들웨어

// app.use((ctx, next) => {
//     console.log(1);
//     // node src 첫번째 미들웨어에서 멈춰버리는 이유는 next()를 호출하지 않기 떄문 
//     next();
// });

// app.use((ctx, next) => {
//     console.log(2);
//     // 다음 문장들을 넣기 위해 next()를 띄워준다.
//     next();
// });

// app.use((ctx, next) => {
//     ctx.body = "hello Koa";
//     next();
// });

// app.listen(4000, () => {
//     console.log('heurm server is listening to port 4000');
// })

// 3.next()는 promise 다 
// app.use((ctx, next) => {
//     console.log(1);
//     const started = new Date();
//     next().then(() => {
//         console.log(new Date() - started + 'ms');
//     });
// });

// app.use((ctx, next) => {
//     console.log(2);
//     // 다음 문장들을 넣기 위해 next()를 띄워준다.
//     next();
// });

// app.use((ctx, next) => {
//     ctx.body = "hello Koa";
//     next();
// });

// app.listen(4000, () => {
//     console.log('heurm server is listening to port 4000');
// })

// 4. async/await 사용
// app.use(async (ctx, next) => {
//     console.log(1);
//     const started = new Date();
//     await next();
//     console.log(new Data() - started - 'ms');
// });

// app.use((ctx, next) => {
//     console.log(2);
//     ctx.body = "Hello Kosa nice me to!!";

//     // 다음 문장들을 넣기 위해 next()를 띄워준다.
//     next();
    
// });

// app.use((ctx, next) => {
//     ctx.body = "hello Koa";
//     next();
// });

// app.listen(4000, () => {
//     console.log('heurm server is listening to port 4000');
// })


// 3. koa-router 사용하기
// router.get('/', (ctx, next) => {
//     ctx.body = '메인 페이지';
// });

// app.use(router.routes());
// app.use(router.allowedMethods());

// app.listen(4000, () => {
//     console.log("heurm servier is listening to port 4000");
// })

// 4. koa - 여러개의 라우트 라우트 파라미터
// router.get('/', (ctx, next) => {
//     ctx.body = '메인 페이지';
// });

// router.get('/about', (ctx, next) => {
//     ctx.body = '소개 페이지';
// })

// router.get('/about/:name', (ctx, next) => {
//     const { name } = ctx.params; // 라우트 경로에 : 파라미터 명으로 정의된 값이 ctx.params안에 설정 
//     ctx.body = name + "의 소개 페이지 입니다."
// })

// router.get('/post', (ctx, next) => {
//     const {id} = ctx.request.query; // 주소 뒤에 ?id=10 형식으로 작성된 쿼리는 ctx.request.query를 이용
//     if (id) {
//         ctx.body = "포스트 #" + id;
//     } else {
//         ctx.body = "해당 포스트가 없습니다."
//     }
// });

// app.use(router.routes()).use(router.allowedMethods());


// app.listen(4000, () => {
//     console.log("heurm servier is listening to port 4000");
// })

// 5-라우트 모듈화 
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('/api', api.routes()); // api 라우트를 /api 하위 라우트로 설정 

app.use(router.routes()).use(router.allowedMethods());

app.use(ctx => {
    ctx.body = "허전해서 만듬";
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
})
