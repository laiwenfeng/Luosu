'use strict';

const Controller = require('egg').Controller;

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
        await this.ctx.render('dingding.html', {"title":"test", "list":[1,2]})
    }

    async senddata(){
        console.log("===start senddata post===")
        console.log(this.ctx.res)
        this.ctx.body = {result: "success"}
    }
}

module.exports = DingdingController;
