'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const Dingding = this.ctx.service.dingding
    let token = await Dingding.GetToken()
    await Dingding.SendData(token, )
  }
}

module.exports = HomeController;
