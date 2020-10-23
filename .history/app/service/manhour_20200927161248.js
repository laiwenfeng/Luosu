const Service = require('egg').Service

class MonthdataService extends Service {
    //依据条件判断是否存在该数据
    async IsExist(conditions) {
        let data = await this.ctx.model.Month.find(conditions)
        return data.length > 0 ? true : false
    }
}

module.exports = MonthdataService