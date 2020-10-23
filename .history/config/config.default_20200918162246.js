/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

// config/config.default.js
exports.keys = '';

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

exports.dingding = {
    appkey: 'dings4smzputs0ytjwjq',
    appsecret: 'oQoLlAE96dvaMdX8IGLlffmEOl2tleOmXcHuSGzJ6fEluk1Da1rMAm8AoePcfl5P',
    serverUrl: 'https://oapi.dingtalk.com/gettoken?'
}

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

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
