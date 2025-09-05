const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email required'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    }
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/app');

async function testValidation() {
    try {
        await User.create({ email: 'invalid-email' });
    } catch (err) {
        console.log('Validation Error:', err.message);
    }
}

testValidation().then(() => mongoose.disconnect());
