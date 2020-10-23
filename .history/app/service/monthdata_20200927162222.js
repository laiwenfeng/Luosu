const Service = require('egg').Service

class MonthdataService extends Service {
    //依据条件判断是否存在该数据
    async IsExist(conditions) {
        let data = await this.ctx.model.Monthdata.find(conditions)
        return data.length > 0 ? true : false
    }

    //批量写入数据
    async InsertAry(ary = []) {
        if(ary.length == 0){
            return null
        }
        return await this.ctx.model.Monthdata.insertMany(ary)
    }

    //写入单条数据
    async Insert(Obj = null){
        if(!Obj){
            return null
        }
        return await this.ctx.model.Monthdata.insert(Obj)
    }
}

module.exports = MonthdataService