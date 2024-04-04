const robinAviator = "./src/assets/robin_aviator.png"
const robinBlaze = "./src/assets/robin_blaze.png"
const robinOb = "./src/assets/robin_ob.png"
const robinVisa = "./src/assets/robin_visa.png"

let Products = {
    product1 : {
        id: 1,
        image: robinAviator,
        name: "Robin Aviator",
        price: 100,
        description: "This is a description of the product 1"
    },
    product2 : {
        id: 2,
        image: robinBlaze,
        name: "Robin Blaze",
        price: 200,
        description: "This is a description of the product 2"
    },
    product3 : {
        id: 3,
        image: robinOb,
        name: "Robin OB",
        price: 300,
        description: "This is a description of the product 3"
    },
    product4 : {
        id: 4,
        image: robinVisa,
        name: "Robin Visa",
        price: 400,
        description: "This is a description of the product 4"
    },   
}

export { Products }