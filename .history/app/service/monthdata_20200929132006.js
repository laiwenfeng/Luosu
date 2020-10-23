const Service = require('egg').Service

class MonthdataService extends Service {
    //依据条件判断是否存在该数据
    async IsExist(conditions) {
        let data = await this.ctx.model.Monthdata.find(conditions)
        return data.length > 0
    }

    //写入数据
    async Insert(ary = null) {
        if (!ary) {
            return null
        }
        return await this.ctx.model.Monthdata.insertMany(ary)
    }

    //依据条件更新数据
    async Update(conditions = null, obj = null) {
        if (!conditions || !obj) {
            return null
        }

        return await this.ctx.model.Monthdata.updateMany(conditions, obj)
    }
    
    //已经条件查询数据
    async Find(conditions = null){
        if(!conditions){
            return null
        }
        return await this.ctx.model.Monthdata.find(conditions)
    }
}

module.exports = MonthdataService