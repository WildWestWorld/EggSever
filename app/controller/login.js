const Controller = require("egg").Controller;

class LoginController extends Controller {
    async login() {
        try {
            let username = this.ctx.request.body.username;
            let token = this.ctx.app.jwt.sign({
                username
            }, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 20000,
                token: token
            }
        } catch (e) {
            this.ctx.body = {
                code: 50000,
                msg: "登陆失败 "
            }
        }
    }
}

module.exports = LoginController;