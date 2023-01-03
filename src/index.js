const Koa = require('koa');
const app = new Koa();

// 1. 헬로 솔저 서버에 console 과 body 텍스트 띄우기
// app.use(ctx => {
//     ctx.body = "Hello Koa nice me to!!";
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
app.use(async (ctx, next) => {
    console.log(1);
    const started = new Date();
    await next();
    console.log(new Data() - started - 'ms');
});

app.use((ctx, next) => {
    console.log(2);
    // 다음 문장들을 넣기 위해 next()를 띄워준다.
    next();
});

app.use((ctx, next) => {
    ctx.body = "hello Koa";
    next();
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
})