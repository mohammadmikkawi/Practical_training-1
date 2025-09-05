const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({ item: String, qty: Number });
const Order = mongoose.model('Order', orderSchema);

mongoose.connect('mongodb://localhost:27017/app').then(async () => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        await Order.create([{ item: 'apple', qty: 10 }, { item: 'banana', qty: 20 }], { session });
        await session.commitTransaction();
        console.log('Transaction committed');
    } catch (err) {
        await session.abortTransaction();
        console.log('Transaction aborted');
    } finally {
        session.endSession();
        mongoose.disconnect();
    }
});
