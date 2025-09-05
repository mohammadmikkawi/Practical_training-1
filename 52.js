const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    status: String,
    total: Number
});
const Order = mongoose.model('Order', orderSchema);

mongoose.connect('mongodb://localhost:27017/app').then(async () => {
    const result = await Order.aggregate([
        { $group: { _id: "$status", totalAmount: { $sum: "$total" } } }
    ]);
    console.log(result);
});
