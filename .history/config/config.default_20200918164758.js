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
    config.middleware = [];

    // 添加 view 配置
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.dingding = {
        appkey: 'dings4smzputs0ytjwjq',
        appsecret: 'oQoLlAE96dvaMdX8IGLlffmEOl2tleOmXcHuSGzJ6fEluk1Da1rMAm8AoePcfl5P',
        serverUrl: 'https://oapi.dingtalk.com/gettoken?'
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
