'use strict'
const Controller = require('egg').Controller

class WorktimeController extends Controller {
    async index() {
        await this.ctx.render('worktime.html', { "title": "WORKTIME", "list": [1, 2] })
    }

    async insert() {
    }

    async save(){
        const WorktimeService = this.ctx.service.worktime

        let data = this.ctx.request.body
        let worktime = data["worktime"]

        console.table(worktime)

        let newdata = []
        for(let index in worktime){
            let {name, workday} = worktime[index]
            if(await WorktimeService.IsExist({name, workday})){
                await WorktimeService.Update({name, month}, worktime[index])
            }
            else{
                newdata.push(worktime[index])
            }
        }

        if(newdata.length){
            await WorktimeService.Insert(newdata)
        }

        this.ctx.body = {"result": "success"}
    }

    async find() {
        this.ctx.body = result
    }

    async update() {
        this.ctx.body = result
    }

    async remove() {
        this.ctx.body = result
    }
}

module.exports = WorktimeController
