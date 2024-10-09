const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://ansariabdulahad3:ansariabdulahad3@merncrudjfc2024.owwff.mongodb.net/'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MONGODB CONNECTED!");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}

module.exports = connectDB;