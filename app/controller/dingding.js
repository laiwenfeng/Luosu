'use strict';

const Controller = require('egg').Controller;
const UserList = require('../public/data/user')

class DingdingController extends Controller {
    async index() {
        const Dingding = this.ctx.service.dingding

        let msg = {
            "msgtype": "oa",
            "oa": {
                "message_url": null,
                "head": {
                    "bgcolor": "FFBBBBBB",
                    "text": "工时管理"
                },
                "body": {
                    "title": "请查收你的工时周报（9月第2周）",
                    "form": [
                        {
                            "key": "",
                            "value": "亲爱的小伙伴，你上周的工时未达标，可以联系你的小组长申请额外任务哦！"
                        }, {
                            "key": "姓名:",
                            "value": "张三"
                        },
                        {
                            "key": "核算工时/h:",
                            "value": "47.5"
                        },
                        {
                            "key": "标准工时/h:",
                            "value": "37.5"
                        },
                        {
                            "key": "超额工时/h:",
                            "value": "10"
                        },
                        {
                            "key": "全体排名:",
                            "value": "1"
                        },
                        {
                            "key": "部门排名:",
                            "value": "1"
                        }
                    ],
                    "image": "@lADPDfJ6RDrt0hDNAX_NA4Q",
                    "author": "项目管理组 "
                }
            }
        }

        //    let token = await Dingding.GetToken()
        //    let result = await Dingding.SendData(token, 254, false, msg)

        // this.ctx.body = msg
        // console.log(msg)
        await this.ctx.render('dingding.html', { "title": "test", "list": [1, 2] })
    }

    async senddata() {
        const Dingding = this.ctx.service.dingding

        let ulist = UserList["userlist"], umap = {}
        for (let i in ulist) {
            let { name, userid } = ulist[i]
            umap[name] = userid
        }

        let token = await Dingding.GetToken()

        let data = this.ctx.request.body
        let {grlist, datecycle, month, date1, date2 } = data
        for (let i in grlist) {
            let msg = {
                "msgtype": "oa",
                "oa": {
                    "message_url": null,
                    "head": {
                        "bgcolor": "FFBBBBBB",
                        "text": "工时管理"
                    },
                    "body": {
                        "title": datecycle == "1" ? "请查收你的工时周报（"+date1+" - "+date2+"）" : "请查收你的工时月报（"+month+"月）",
                        "form": [
                            {
                                "key": "     ",
                                "value": grlist[i]["remark"]
                            }, {
                                "key": "姓名：",
                                "value": grlist[i]["name"]
                            },
                            {
                                "key": "核算工时/h：",
                                "value": grlist[i]["hstime"]
                            },
                            {
                                "key": "标准工时/h：",
                                "value": grlist[i]["bztime"]
                            },
                            {
                                "key": "超额工时/h：",
                                "value": grlist[i]["cehstime"]
                            },
                            {
                                "key": "全体排名：",
                                "value": grlist[i]["rank"]
                            },
                            {
                                "key": "部门排名：",
                                "value": grlist[i]["deptrank"]
                            }
                        ],
                        "image": datecycle == "1" ? "@lADPDetfRws2AjTNAX_NA4Q" : "@lADPDetfR7SqdLrNAX_NA4Q",
                        "author": "项目管理组 "
                    }
                }
            }

            if(datecycle == "1"){
                msg["oa"]["body"]["form"].push({
                    "key": "（最终工时奖励以审核后数据为准，有任何疑惑或建议，可随时联系项目管理组）",
                    "value": ""
                })
            }
            else{
                if(grlist[i]["teamtime"] && parseFloat(grlist[i]["teamtime"]) != 0){
                    msg["oa"]["body"]["form"].push({
                        "key": "团队加成/h：",
                        "value": grlist[i]["teamtime"]
                    })
                    msg["oa"]["body"]["form"].push({
                        "key": "总超额/h：",
                        "value": grlist[i]["cehstimetotal"]
                    })
                }
    
                if(parseFloat(grlist[i]["cehstimetotal"]) > 0){
                    msg["oa"]["body"]["form"].push({
                        "key": "     ",
                        "value": "依据《数创中心项目激励方案》规定，此次发放总奖励的60%，剩余40%将在年底核算后统一发放。"
                    })
                }
            }

            if(umap[grlist[i]["name"]]){
            //    await Dingding.SendData(token, umap[grlist[i]["name"]], false, msg)
                if(i <= 5){
                    await Dingding.SendData(token, '254', false, msg)
                    console.log("周数据")
                }
                // console.log(JSON.stringify(msg))
            }
        }
        this.ctx.body = { result: "success" }
    }

    async sendseasondata() {
        const Dingding = this.ctx.service.dingding

        let ulist = UserList["userlist"], umap = {}
        for (let i in ulist) {
            let { name, userid } = ulist[i]
            umap[name] = userid
        }

        let token = await Dingding.GetToken()
        let data = this.ctx.request.body
        let {grlist, month } = data
        for (let i in grlist) {
            let msg = {
                "msgtype": "oa",
                "oa": {
                    "message_url": null,
                    "head": {
                        "bgcolor": "FFBBBBBB",
                        "text": "工时管理"
                    },
                    "body": {
                        "title": "请查阅你的月度工时报告("+month+")",
                        "form": [
                            {
                                "key": "     ",
                                "value": grlist[i]["remark"]
                            }, {
                                "key": "姓名：",
                                "value": grlist[i]["name"]
                            },
                            {
                                "key": "核算工时/h：",
                                "value": grlist[i]["hstime"]
                            },
                            {
                                "key": "标准工时/h：",
                                "value": grlist[i]["bztime"]
                            },
                            {
                                "key": "个人超额/h：",
                                "value": grlist[i]["cehstime"]
                            },
                            {
                                "key": "全体排名：",
                                "value": grlist[i]["rank"]
                            },
                            {
                                "key": "部门排名：",
                                "value": grlist[i]["deptrank"]
                            }
                        ],
                        "image": "@lADPDetfR7SqdLrNAX_NA4Q",
                        "author": "项目管理组 "
                    }
                }
            }

            if(grlist[i]["teamtime"] && parseFloat(grlist[i]["teamtime"]) != 0){
                msg["oa"]["body"]["form"].push({
                    "key": "团队加成/h：",
                    "value": grlist[i]["teamtime"]
                })
                msg["oa"]["body"]["form"].push({
                    "key": "总超额/h：",
                    "value": grlist[i]["cehstimetotal"]
                })
            }

            if(parseFloat(grlist[i]["cehstimetotal"]) > 0){
                msg["oa"]["body"]["form"].push({
                    "key": "     ",
                    "value": "依据《数创中心项目激励方案》规定，此次发放总奖励的60%，剩余40%将在年底核算后统一发放。"
                })
            }

            if(umap[grlist[i]["name"]]){
                // await Dingding.SendData(token, umap[grlist[i]["name"]], false, msg)
                if(i <= 5){
                    await Dingding.SendData(token, '254', false, msg)
                    console.log("月度数据")
                }
                console.log(JSON.stringify(msg))
            }
        }
        this.ctx.body = { result: "success" }
    }
}

module.exports = DingdingController;
