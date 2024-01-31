


const iceCreams = [
    {
        name: 'Vanilla',
        price: 3,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Carmel Pecan',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Mint Chip',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Toasted Almond Fudge',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Moose Tracks',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Black Raspberry',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Huckleberry',
        price: 0,
        quantity: 0,
        toppings: []
    },

    {
        name: 'Coffee',
        price: 0,
        quantity: 0,
        toppings: []
    },

    {
        name: 'Chocolate',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cookies-N-Cream',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Strawberry Cheesecake',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Butter Pecan',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Delce de Leche',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Pistachio',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Banana Nut',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Rocky Road',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Coconut',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Peach',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Peanut Butter Swirl',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Strawberry',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Lemon',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Key Lime',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cookie-Dough',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Cherry',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Birthday-Cake',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: 'Bubblegum',
        price: 0,
        quantity: 0,
        toppings: []
    },
    {
        name: '',
        price: 0,
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
        name: 'Gummy-Bears',
        price: .50,
        quantity: 0
    },
    {
        name: '',
        price: 0,
        quantity: 0
    },
    {
        name: '',
        price: 0,
        quantity: 0
    },
    {
        name: '',
        price: 0,
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