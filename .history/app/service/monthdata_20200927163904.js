const Service = require('egg').Service

class MonthdataService extends Service {
    //依据条件判断是否存在该数据
    async IsExist(conditions) {
        let data = await this.ctx.model.Monthdata.find(conditions)
        return data.length > 0 ? true : false
    }

    //写入单条数据
    async Insert(obj = null) {
        if (!obj) {
            return null
        }
        return await this.ctx.model.Monthdata.insert(obj)
    }

    //批量写入数据
    async InsertAry(ary = []) {
        if (ary.length == 0) {
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
}

module.exports = MonthdataService