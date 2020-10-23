const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
        const { appkey, appsecret, serverUrl } = this.config.dingding
        const result = await this.ctx.curl(`${serverUrl}?`, {
            data: {
                appkey: `${appkey}`,
                appsecret: `${appsecret}`
            },
            dataType: 'json'
        })

        return result.data.access_token || result.data.errmsg
    }

    async SendData(){
        
    }
}

module.exports = DingdingService