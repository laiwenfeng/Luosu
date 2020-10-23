'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const Worktime = new Schema({
        name: { type: String },                    // 姓名
        workday: { type: String },                 // 工作日
        worktime: { type: Number, default: 0  },       // 考勤时长
    })

    return mongoose.model('Worktime', Worktime, 'worktime')
}