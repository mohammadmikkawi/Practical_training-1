const mongoose = require('mongoose');
const User = require('./48-mongooseSchema');

mongoose.connect('mongodb://localhost:27017/app');

async function run() {
    const user = await User.create({ email: 'test@example.com' });
    console.log('Created:', user);

    const found = await User.findOne({ email: 'test@example.com' });
    console.log('Found:', found);

    const updated = await User.findOneAndUpdate({ email: 'test@example.com' }, { email: 'new@example.com' }, { new: true });
    console.log('Updated:', updated);

    await User.deleteOne({ email: 'new@example.com' });
    console.log('Deleted');
}

run().then(() => mongoose.disconnect());
