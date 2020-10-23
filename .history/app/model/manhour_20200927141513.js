'use strict';

module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema
    const PostSchema = new Schema({

    })

    return mongoose.model('Manhour', PostSchema)

}