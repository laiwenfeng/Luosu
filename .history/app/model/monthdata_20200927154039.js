'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const Monthdata = new Schema({
        name: { type: String },                    // 姓名
        month: { type: String },                   // 月份
        rank: { type: Number, default: 0 },        // 排名
        deptrank: { type: Number, default: 0 },    // 部门排名
        hshour: { type: Number, default: 0 },      // 核算工时
        bzhour: { type: Number, default: 0 },      // 标准工时
        cehour: { type: Number, default: 0 },      // 超额工时
        teamhour: { type: Number, default: 0 }     // 团队工时
    })

    return mongoose.model('Monthdata', Monthdata, 'monthdata')

}