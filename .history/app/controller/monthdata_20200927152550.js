'use strict'

const Controller = require('egg').Controller
class MonthdataController extends Controller {
    async insert() {
    }

    async find(){
        let monthdata =  await this.ctx.model.monthdata.find()
        this.ctx.body = monthdata
    }
}

module.exports = MonthdataController
