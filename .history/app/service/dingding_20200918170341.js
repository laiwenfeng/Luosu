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

    async SendData(token, agentid, useridlist, toalluser = false, msg){
        const { sendServerUrlserverUrl } = this.config.dingding

        const result = await this.ctx.curl(`${sendServerUrlserverUrl}?`, {
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