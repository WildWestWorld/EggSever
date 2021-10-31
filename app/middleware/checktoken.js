function checktoken() {
    return async function (ctx, next) {
        try {
            let token = ctx.header.token;//获取token
            ctx.app.jwt.verify(token,ctx.app.config.secret)//验证token
            await next();//跳转controller
        }
        catch (e) {
            ctx.body = {
                code: 40000,
                msg: "token验证失败"
            }
        }

    }
}

module.exports = checktoken