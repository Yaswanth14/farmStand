const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo Connection open!!!');
    })
    .catch(err => {
        console.log('oh No mongo connection errror!!\n');
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p);
//     console.log('done');
// })
// .catch(e => {
//     console.log(e)
// })

// const seedProducts = [
//     {
//         name: 'Fairy Eggplant',
//         price: 1.00,
//         category: 'vegitable'
//     },
//     {
//         name: 'Organic Goddess Melon',
//         price: 4.99,
//         category: 'fruit'
//     },
//     {
//         name: 'Organic Mini Seedless Watermelon',
//         price: 3.99,
//         category: 'fruit'
//     },
//     {
//         name: 'Organic Celery',
//         price: 1.50,
//         category: 'vegitable'
//     },
//     {
//         name: 'Choclate Whole Milk',
//         price: 2.69,
//         category: 'dairy'
//     },
// ]

// Product.insertMany(seedProducts)
// .then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log(e)
// })

