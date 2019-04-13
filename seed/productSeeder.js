const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

let products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'It is a German awesome video game. You should check it out!',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.g2a.com/newlayout/470x470/1x1x0/c91e4edc8185/5c41c6e35bafe3114e650932',
        title: 'Dirt Rally 2.0',
        description: 'A new 2019 rally game. It is epic and should gave a full rate of this game.',
        price: 20
    }),
    new Product({
        imagePath: 'https://s1.gaming-cdn.com/images/products/1419/271x377/call-of-duty-infinite-warfare-cover.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'War game',
        price: 15
    }),
    new Product({
        imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/17430/header.jpg?t=1447351585',
        title: 'Need For Speed Undercover',
        description: 'An addicted historic race game for all time',
        price: 10
    })
];

for(product of products) {
    let newProduct = new Product(product);
    newProduct.save();
}

mongoose.disconnect();

// let done = 0;

// for(let i = 0; i = products.length; i++) {
//     products[i].save((err, result) => {
//         done++;
//         if(done === products.length) {
//             exit();
//         }
//     });
// }

// function exit() {
//     mongoose.disconnect();
// }

// exit = () => {
//     mongoose.disconnect();
// }