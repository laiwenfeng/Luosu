'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const Dailyinfo = new Schema({
        xm: { type: String },                   // 姓名
        gzrq: {type: String},                   // 工作日期
        bzgs: { type: String },                 // 工作日
        kqsc: { type: Number, default: 0  }       // 考勤时长
    })

    return mongoose.model('Dailyinfo', Dailyinfo, 'dailyinfo')
}