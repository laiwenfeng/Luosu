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
    async Find(conditions = null) {
        if (!conditions) {
            return null
        }
        return await this.ctx.model.Monthdata.find(conditions)
    }

    async GetMonthdata(months = "") {
        let monthdata = await this.Find({ month: { $in: months.split(",") } })
        let mdMap = {}
        for(let i in monthdata){
            let {name, dept, hstime, bztime, cehstime, teamtime} = monthdata[i]
            if(!mdMap[name]){
                mdMap[name] = { name, dept, hstime, bztime, cehstime, teamtime }
                mdMap[name]["teamtime"] = parseFloat(teamtime) > 0 ? teamtime : 0
                mdMap[name]["cehstimetotal"] = (parseFloat(cehstime) + parseFloat(mdMap[name]["teamtime"])).toFixed(2)
            }
            else{
                mdMap[name]["hstime"] = (parseFloat(mdMap[name]["hstime"]) + parseFloat(hstime)).toFixed(2)
                mdMap[name]["bztime"] = (parseFloat(mdMap[name]["bztime"]) + parseFloat(bztime)).toFixed(2)
                mdMap[name]["cehstime"] = (parseFloat(mdMap[name]["cehstime"]) + parseFloat(cehstime)).toFixed(2)
                mdMap[name]["teamtime"] = (parseFloat(mdMap[name]["teamtime"]) + (parseFloat(teamtime) > 0 ? parseFloat(teamtime) : 0)).toFixed(2)
                mdMap[name]["cehstimetotal"] = (parseFloat(mdMap[name]["cehstime"]) + parseFloat(mdMap[name]["teamtime"])).toFixed(2)
            }
        }

        let mdAry = []
        for(let name in mdMap){
            mdAry.push(mdMap[name])
        }

        return mdAry
    }
}

module.exports = MonthdataService