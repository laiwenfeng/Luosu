'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const Dingding = this.ctx.service.dingding

        let msg = {
            "msgtype": "oa",
            "oa": {
                "head": {
                    "bgcolor": "000",
                    "text": "工时管理 "
                },
                "body": {
                    "title": "正文标题",
                    "form": [
                        {
                            "key": "姓名:",
                            "value": "张三"
                        },
                        {
                            "key": "年龄:",
                            "value": "20"
                        },
                        {
                            "key": "身高:",
                            "value": "1.8米"
                        },
                        {
                            "key": "体重:",
                            "value": "130斤"
                        },
                        {
                            "key": "学历:",
                            "value": "本科"
                        },
                        {
                            "key": "爱好:",
                            "value": "打球、听音乐"
                        }
                    ],
                    "rich": {
                        "num": "15.6",
                        "unit": "元"
                    },
                    "content": "大段文本大段文本大段文本大段文本大段文本大段文本大段文本大段文本大段文本大段文本大段文本大段文本",
                    "image": "@lADOADmaWMzazQKA",
                    "file_count": "3",
                    "author": "李四 "
                }
            }
        }

        let token = await Dingding.GetToken()
        let result = await Dingding.SendData(token, 254, false, msg)

        this.ctx.body = result
    }
}

module.exports = HomeController;
