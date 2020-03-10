const Sequelize = require('sequelize')
const sequelize = require('../config/db');
const Review = require('./review')

class Product extends Sequelize.Model { }

Product.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imgURL: {
        type: Sequelize.STRING,
        defaultValue: 'http://via.placeholder.com/300'
    },
    visible: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
        sequelize,
        modelName: 'product'
    });


Product.prototype.rating = function () {
    return Review.findAll({where: { productId: this.id }})
        .then(data => {
            let acc = 0;
            for (let i = 0; i < data.length; i++) acc += data[i].rating;
            return data.length ? Math.round((acc / data.length)*10)/10 : 5
        })

}


module.exports = Product