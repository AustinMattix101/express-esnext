import { default as mongoose } from "mongoose";
import figlet from "figlet";

async function connectDB() {
    const uri = process.env.MONGO_URI;

    try {
        const data = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }); // Use then here!
        figlet('MATTIX', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
        console.log(`Connected Successfully to The Database!`);
        console.log(`Database Connected to ${data.connection.host}:${data.connection.port}`);
        // console.log('Connection Details: \n', data);
    
        await mongoose.connection.on('disconnected', () => {
            console.log(`Database Disconnected!`);
        });
    
        await mongoose.connection.on('connected', () => {
            console.log(`Database Reconnected!`);
        });

    } catch (error) {
        console.log(`Error: ${error}`);
        next(error);
    }
}

export default connectDB;