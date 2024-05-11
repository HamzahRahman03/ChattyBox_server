const mongoose = require('mongoose');

const url = "mongodb+srv://HamzahRahman03:Abcde%4012345@cluster0.z4t3ned.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error', error);
    }
};

connectToDB();
