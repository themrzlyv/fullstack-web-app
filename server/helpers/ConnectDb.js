import mongoose from 'mongoose'


const ConnectDb = () => {
    if(mongoose.connections[0].readyState){
        console.log(`Already Connected MongoDb`)
    }

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log(`MongoDb Conneted`))
    .catch((err) => console.log(`Connection Problem`))
}

export default ConnectDb;