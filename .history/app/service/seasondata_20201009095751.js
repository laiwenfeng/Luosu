const Service = require('egg').Service

class SeasondataService extends Service{
    //根据季度获取数据
    async GetSeasondata(months = ""){
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

module.exports = SeasondataService