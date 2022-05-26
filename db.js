const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };
        await mongoose.connect('mongodb:localhost/todo-app', connectionParams);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}