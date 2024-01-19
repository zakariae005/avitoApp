import mongoose from 'mongoose'

let isConnected : Boolean = false

export const connnectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB URL');
        
    }

    if (isConnected) {
        return console.log('USER is already connected');
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'avito__app'
        })

        isConnected = true
        console.log('Database is connected successfully');
        
    } catch (error) {
        console.log(error);
    }
}