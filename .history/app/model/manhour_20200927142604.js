'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const PostSchema = new Schema({
        vid: { type: String },
        name: { type: String },
        month: { type: String },
        rank: { type: Number, default: 0 },
        deptrank: { type: Number, default: 0 },
        hshour: { type: Number, default: 0 },
        bzhour: { type: Number, default: 0 },
        cehour: { type: Number, default: 0 },
        teamhour: { type: Number, default: 0 }
    })

    return mongoose.model('Manhour', PostSchema)

}