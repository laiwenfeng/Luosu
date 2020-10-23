const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
        const { appkey, appsecret, serverUrl } = this.config.dingding

        console.log('======开始======')
        const result = await this.ctx.curl(`${serverUrl}`, {
            data: {
                appkey: `${appkey}`,
                appsecret: `${appsecret}`
            },
            dataType: 'json',
        })

        console.log(result)
        
        console.log('======结束======')

        return result
    }
}

module.exports = DingdingService