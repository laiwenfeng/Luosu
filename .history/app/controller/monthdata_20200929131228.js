'use strict'

const Controller = require('egg').Controller
class MonthdataController extends Controller {
    async insert() {
    }

    async save(){
        const Monthdata = this.ctx.service.monthdata
        let data = this.ctx.request.body
        let monthdata = data["monthdata"]

        let newdata = []
        for(let i in monthdata){
            let {name, month} = monthdata[i]
            if(await Monthdata.IsExist({name, month})){
                await Monthdata.Update({name, month}, monthdata[i])
            }
            else{
                newdata.push(monthdata[i])
            }
        }

        if(newdata.length){
            await Monthdata.Insert(newdata)
        }

        this.ctx.body = {"result": "success"}
    }

    async find() {
        let monthdata = "1" // = await this.ctx.model.Monthdata.find({})
        console.log("find monthdata ==== " + monthdata)
  
        this.ctx.body = monthdata
    }

    async update() {
        let result = await this.ctx.model.Monthdata.update({"name": "李渊", "month": 8}, {
            name: "李世民",    // 姓名
            month: "7",       // 月份
            rank: 1,          // 排名
            deptrank: 1,      // 部门排名
            hshour: 177.5,    // 核算工时
            bzhour: 167.5,    // 标准工时
            cehour: 10,       // 超额工时
            teamhour: 5       // 团队工时
        })

        this.ctx.body = result
    }
}

module.exports = MonthdataController
