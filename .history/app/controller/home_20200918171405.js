'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const Dingding = this.ctx.service.dingding

    let token = await Dingding.GetToken()
    let result = await Dingding.SendData(token, 254, false, '{"msgtype": "text", "text": { "content": "成功了吗？" } }')

    this.ctx.body = result
  }
}

module.exports = HomeController;
