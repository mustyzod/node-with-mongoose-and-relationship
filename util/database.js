const mongoose = require('mongoose');
const dbkeys = require('../config/keys').Database.mongoURI;

class MongoDBconnect {
    constructor() {
        this.mongoOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    }

    connect() {
        mongoose.connect(dbkeys, this.mongoOptions)
            .then(() => console.log(`${new Date().toString()} => MongoDb database Connection established successfully!`))
            .catch(err => console.log(err));
    }
}

module.exports = MongoDBconnect;