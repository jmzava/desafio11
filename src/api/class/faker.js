const {faker} = require('@faker-js/faker')

function generateRandomProds(cant) {
    const listProd = [];
     for (let index = 0; index < cant; index++) {
        
         const prod = {
            id : index + 1 ,
            title: faker.commerce.productName(),
            price: faker.commerce.price(),
            url: faker.image.imageUrl()
         }
           listProd.push(prod)
    }
    return listProd
 }
 
module.exports = generateRandomProds


