'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const PostSchema = new Schema({
        vid: { type: String },

    })

    return mongoose.model('Manhour', PostSchema)

}