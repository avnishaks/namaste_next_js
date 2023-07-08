import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);

        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('MongoDB successfully connected');
        })

        connection.on('error',(err)=>{
            console.log('MongoDB connection error: Please make sure MongoDB is running'+err);
            process.exit();
        })
        
    } catch (error) {
        console.log("Something goes wrong here !");
        console.log(error);
    }
}