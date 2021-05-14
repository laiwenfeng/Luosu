/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1600414746135_7218';

    // add your middleware config here
    config.middleware = ['robot'];

    // robot's configurations
    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    };

    // 添加 view 配置
    config.view = {
        defaultViewEngine: 'art',
        mapping: {
            '.html': 'art',
        },
    }

    // 钉钉应用配置
    config.dingding = {
        AppKey: 'dings4smzputs0ytjwjq',
        AppSecret: 'oQoLlAE96dvaMdX8IGLlffmEOl2tleOmXcHuSGzJ6fEluk1Da1rMAm8AoePcfl5P',
        AgentId: '880060231',
        TokenServerUrl: 'https://oapi.dingtalk.com/gettoken?',
        SendServerUrl: 'https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2?'
    }

    //配置 body 最大长度
    config.bodyParser = {
        jsonLimit: '1mb',
        formLimit: '1mb',
    }

    //防止 CSRF 攻击
    config.security = {
        csrf: {
            headerName: 'x-csrf-luosu-token',// 自定义请求头
        }
    }

    //MongoDB地址 
    // config.mongoose = {
    //     url: process.env.EGG_MONGODB_URL || 'mongodb://admin:biosan#17ls@127.0.0.1:27017/manhourdb?authSource=admin',
    //     options: {
    //         server: {
    //             poolSize: 40,
    //         },
    //         useUnifiedTopology: true
    //     },
    // };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
