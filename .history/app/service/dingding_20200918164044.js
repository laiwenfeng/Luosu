const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
        const { appkey, appsecret, serverUrl } = this.config.dingding
        
        console.log('======start======')
        console.log('serverUrl = ' + `${serverUrl}`)
        console.log('appkey = '+ `${appkey}`)
        console.log('appsecret = '+ `${appsecret}`)
        const result = await this.ctx.curl('${serverUrl}', {
            data: {
                appkey: '${appkey}',
                appsecret: '${appsecret}'
            },
            dataType: 'json',
        })

        console.log(result)
        
        console.log('======end======')

        return result
    }
}

module.exports = DingdingService