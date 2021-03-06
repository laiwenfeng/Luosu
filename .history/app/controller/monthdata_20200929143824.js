'use strict'

const Controller = require('egg').Controller
const UserList = require('../public/data/user')

class MonthdataController extends Controller {
    async insert() {
    }

    getTeamtime(leader, userMap, userList){

    }

    async save(){
        let lList = UserList["leaderlist"]
        const Monthdata = this.ctx.service.monthdata
        let data = this.ctx.request.body
        let monthdata = data["monthdata"]

        let userMap = {}
        for(let i in monthdata){
            let {name} = monthdata[i]
            userMap[name] = monthdata[i]
        }

        let newdata = []
        for(let i in monthdata){
            let {name, month} = monthdata[i]
            if(lList[month][name]){
                monthdata[i]["teamtime"] = getTeamtime(name, userMap, UserList)
            }

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
        let conditions = this.ctx.request.body
        console.log(this.ctx.request)
        let result = "" 
        try{
            result = await this.ctx.service.monthdata.Find(conditions)
        }
        catch(e){
            result = e.toString()
        }
          
        this.ctx.body = result
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

    async remove() {
        let { id } = this.ctx.request.body
        
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
