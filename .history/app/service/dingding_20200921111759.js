const Service = require('egg').Service

class DingdingService extends Service {
    //依据appkey、appsecret获取钉钉token
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

    //依据token对指定的user推动消息
    async SendData(token, useridlist, toalluser = false, msg){
        const {AgentId, SendServerUrl } = this.config.dingding

        const result = await this.ctx.curl(`${SendServerUrl}?`, {
            data: {
                access_token: token,
                agent_id: AgentId,
                userid_list: useridlist,
                to_all_user: toalluser,
                msg: msg
            },
            dataType: 'json',
            type: 'post'
        })

        console.log(result)

        return result
    }
}

module.exports = DingdingService