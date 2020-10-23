'use strict'

const Controller = require('egg').Controller
class MonthdataController extends Controller {
    async insert() {
    }

    async find() {
        let monthdata = await this.ctx.model.Monthdata.find({})
        console.log(this.ctx.model.Monthdata.find())
        this.ctx.body = monthdata
    }

    async update() {
        let result = await this.ctx.model.Monthdata.update({"name": "李世民", "month": 8}, {
            name: "李渊",    // 姓名
            month: 7,       // 月份
            rank: 1,          // 排名
            deptrank: 1,      // 部门排名
            hshour: 177.5,    // 核算工时
            bzhour: 167.5,    // 标准工时
            cehour: 10,       // 超额工时
            teamhour: 5       // 团队工时
        }, {})

        this.ctx.body = result
    }
}

module.exports = MonthdataController
