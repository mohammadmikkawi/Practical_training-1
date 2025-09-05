const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    createdAt: Date
});

userSchema.index({ email: 1, createdAt: -1 });

const User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost:27017/app');
