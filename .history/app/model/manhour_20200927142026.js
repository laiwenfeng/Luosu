'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const PostSchema = new Schema({
        vid: { type: String },
        name: { type: String },
        month: { type: String },
        rank: { type: Number },
        deptrank: { type: Number },
        hshour: { type: Number },
        bzhour: { type: Number },
        cehour: { type: Number },
        teamhour: { type: Number }
    })

    return mongoose.model('Manhour', PostSchema)

}