const Service = require('egg').Service

class SeasondataService extends Service{
    //根据季度获取数据
    async GetSeasondata(season = ""){
            let seasondata = {"1":"1,2,3", "2":"4,5,6", "3":"7,8,9", "4":"10,11,12"}

            if(!season || !seasondata[seasondata]) {
                return null
            }
                
            return null
    }
}

module.exports = SeasondataService