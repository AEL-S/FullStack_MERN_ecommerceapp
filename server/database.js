// used to connect to database
//npm run server to connect
import mongoose from 'mongoose';

const connectToDatabase = async () => {
    // trycatch tab makes skeleton here
try {
    mongoose.set('strictQuery', false);
    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    console.log(`Sucessfully Connected to NoNonScentsSoapsDB: ${connect.connection.host}`);
} catch (error) {
    console.log(`Error: ${error.message}`)
}
};

export default connectToDatabase;