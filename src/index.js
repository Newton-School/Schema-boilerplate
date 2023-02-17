const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
const url = "mongodb://localhost/products"
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

//process.env.DATABASE_URL


app.listen(3000, () => console.log('Server running......'));

