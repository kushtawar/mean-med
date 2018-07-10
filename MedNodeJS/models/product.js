const mongoose = require('mongoose');

var Product= mongoose.model('Product', {
    productname: {type: String},
    productassetid: {type: String},
    productweight: {type: String},
    productmanufacturer: {type: String}
});
module.exports={Product:Product};


/*
name = productname
position = productassetid
office = productweight
salary = productmanufacturer


*/