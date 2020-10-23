const Service = require('egg').Service

class DingdingService extends Service {
    async GetToken() {
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

    async SendData(token, agentid, useridlist, toalluser = false, msg){
        const { SendServerUrl } = this.config.dingding

        const result = await this.ctx.curl(`${SendServerUrl}?`, {
            data: {
                access_token: token,
                agent_id: agentid,
                userid_list: useridlist,
                to_all_user: toalluser,
                msg: msg
            },
            dataType: 'json'
        })

        console.log(result)

        return result
    }
}

module.exports = DingdingService