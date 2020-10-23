const Service = require('egg').Service

class MonthdataService extends Service {
    //依据appkey、appsecret获取钉钉token
    async IsExist(conditions = false) {
        if(!conditions){
            return -1
        }

        let data = await this.ctx.model.Month.find(conditions)

        const { AppKey, AppSecret, TokenServerUrl } = this.config.dingding
        const result = await this.ctx.curl(`${TokenServerUrl}?`, {
            data: {
                appkey: `${AppKey}`,
                appsecret: `${AppSecret}`
            },
            dataType: 'json'
        })

        return result.data.access_token || result.data.errmsg
    }
}

module.exports = MonthdataService