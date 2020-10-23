const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
        const { appkey, appsecret, serverUrl } = this.config.dingding

        console.log('======开始======')
        const result = await this.ctx.curl(`${serverUrl}?`, {
            data: {
            //    appkey: `${appkey}`,
                appsecret: `${appsecret}`
            },
            dataType: 'json'
        })
console.log(result)
        return result.data.access_token
    }
}

module.exports = DingdingService