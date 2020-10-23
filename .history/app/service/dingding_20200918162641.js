const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
        const result = await this.ctx.curl('${serverUrl}', {
            data: {
                appkey: '${appkey}',
                appsecret: '${appsecret}'
            },
            dataType: 'json',
        });

        console.log('======start======')
        console.log(result)
        console.log('======end======')

        return result;
    }
}

module.exports = DingdingService