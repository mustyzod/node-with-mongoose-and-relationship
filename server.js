const express = require("express");
const app = express();
const MongoDb = require('./util/database');
const mongoDbInit = new MongoDb();

//model block starts
const UserModel = require('./models/User');
//model block ends

//routes block starts
const ProductRoute = require('./routes/products');
//routes block ends

app.use(express.json());

app.use((req, res, next) => {
    UserModel.findById('5e72e7d1bfaad0180b3a28c9')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});
// Init DB Connection
mongoDbInit.connect();

app.use('/api/v1/products', ProductRoute)

const PORT = process.env.PORT || 3000;
UserModel.findOne()
    .then(user => {
        if (!user) {
            UserModel.create({
                name: "sodruldeen",
                email: "mustyzod@gmail.com",
                imageUrl: "ecaple url",
                cart: {
                    items: []
                }
            })
        }
    })
    .catch(err => console.log(err));
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});