const mongoose = require('mongoose');

const mongo_uri = "mongodb+srv://admin:admin@cluster0.fyua0e1.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB