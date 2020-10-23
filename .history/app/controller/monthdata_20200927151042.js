'use strict'

const Controller = require('egg').Controller
class MonthdataController extends Controller {
    async insert() {

        await this.ctx.render('dingding.html', { "title": "test", "list": [1, 2] })
    }
}

module.exports = MonthdataController
