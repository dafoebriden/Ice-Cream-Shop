


const iceCreams = [
    {
        name: 'Vanilla',
        price: 3,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Carmel Pecan',
        price: 4.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Mint Chip',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Toasted Almond Fudge',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Moose Tracks',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Black Raspberry',
        price: 5.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Huckleberry',
        price: 6,
        quantity: 0,
        toppings: []
    },

    {
        name: 'Coffee',
        price: 4,
        quantity: 0,
        toppings: []
    },

    {
        name: 'Chocolate',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cookies-N-Cream',
        price: 3.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Strawberry Cheesecake',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Butter Pecan',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Delce de Leche',
        price: 5.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Pistachio',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Banana Nut',
        price: 4.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Rocky Road',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Coconut',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Peach',
        price: 3.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Peanut Butter Swirl',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Strawberry',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Lemon',
        price: 4.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Key Lime',
        price: 5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cookie-Dough',
        price: 4,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cherry',
        price: 4.5,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Birthday-Cake',
        price: 3,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Bubblegum',
        price: 3,
        quantity: 0,
        toppings: []
    },
]

const toppings = [
    {
        name: 'Sprinkles',
        price: .25,
        quantity: 0
    },
    {
        name: 'Gummy Bears',
        price: .60,
        quantity: 0
    },
    {
        name: 'Chocolate Syrup',
        price: .45,
        quantity: 0
    },
    {
        name: 'Sour Gummy Worms',
        price: .75,
        quantity: 0
    },
    {
        name: 'Whipped Cream',
        price: .25,
        quantity: 0
    },
]


function addIceCreamToCart(iceCreamName) {
    console.log('Found Ice Cream Name', iceCreamName);
    const foundIceCream = iceCreams.find(iceCream => iceCream.name == iceCreamName)
    console.log('Found Ice Cream', foundIceCream);
    foundIceCream.quantity++
    calculateCartTotal()
    drawCartList()
}

// function addToppingsToIceCream() { }

function calculateCartTotal() {
    let iceCreamTotal = 0
    let toppingTotal = 0
    let total = iceCreamTotal + toppingTotal

    iceCreams.forEach(iceCream => {
        iceCreamTotal += iceCream.price * iceCream.quantity
    })

    toppings.forEach(topping => {
        toppingTotal += topping.price * topping.quantity
    })



    console.log(`Ice Cream Total: ${iceCreamTotal}`)
    console.log(`Toppings Total: ${toppingTotal}`)
    console.log(`Total:$${total}`)

    const cartTotalElement = document.getElementById('cartTotal')
    cartTotalElement.innerText = total.toString()
}

function drawCartList() {
    let names = ''

    const iceCreamsWithQuantity = iceCreams.filter(iceCream => iceCream.quantity > 0)
    console.log('filtered Ice Cream:', iceCreamsWithQuantity);

    iceCreamsWithQuantity.forEach(iceCream => {
        names += `<li>${iceCream.name}(${iceCream.quantity})x$${iceCream.price}=$${iceCreamTotal}
    Toppings:${iceCream.toppings}=$${toppingTotal}<li>`
    })

    const cartItemsElement = document.getElementById('iceCreams')
    cartItemsElement.innerHTML = names

}










calculateCartTotal()