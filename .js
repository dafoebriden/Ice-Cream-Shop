


const iceCream = [
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
    // console.log('Found Ice Cream Name', iceCreamName);
    const foundIceCream = iceCream.find(iceCream => iceCream.name == iceCreamName)
    console.log('Found Ice Cream', foundIceCream);
    foundIceCream.quantity++
    calculateCartTotal()
}

function addToppingsToIceCream() { }

function calculateCartTotal() {
    let iceCreamTotal = 0
    iceCream.forEach(iceCream => {
        if (iceCream.quantity >= 1) {
            iceCreamTotal += iceCream.price * (iceCream.quantity - 1)
        }
        else { console.log() }
    });
    let toppingsTotal = 0
    toppings.forEach(toppings => {
        toppingsTotal += toppings.price * toppings.quantity
    })
    let total = (iceCreamTotal + toppingsTotal)
    console.log(`Total:$${total}`)

    const cartTotalElement = document.getElementById('total')
    cartTotalElement.innerText = total.toString()
}

function drawCartList() {
    let names = ''

    const iceCreamWithQuantity = iceCream.filter(iceCream => iceCream.quantity > 0)
    console.log('filtered Ice Cream:', iceCreamWithQuantity);

    iceCreamWithQuantity.forEach(iceCream => {
        names += `<li>${iceCream.name}(${iceCream.quantity})x$${iceCream.price}=$${iceCreamTotal}
    ${iceCream.toppings}=$${toppingsTotal}<li>`
    })

    const cartItemsElement = document.getElementById('cartItems')
    cartItemsElement.innerHTML = names

}










calculateCartTotal()