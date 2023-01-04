exports.list = (ctx) => {
    ctx.body = '리스트들';
};

exports.create = (ctx) => {
    ctx.body = 'created';
}

exports.delete = (ctx) => {
    ctx.body = "deleted";
}

exports.replace = (ctx) => {
    ctx.body = 'replaced';
}

exports.update = (ctx) => {
    ctx.body = "updated";
}