// Getting the relavent elements by html file
let cartArea = document.querySelector(".cartArea")
let cartIcon = document.querySelector(".cartIcon")
let cartClose = document.getElementById("close")
let cartCheckout = document.getElementById("check")
let cartItems = document.querySelector(".items-cart")
let cartCountDisplay = document.getElementById("count-cart")
let cartTotalPrice = document.querySelector(".total-cart")
let mainContainer = document.querySelector(".container")

let itemArea1 = document.getElementById("items-1")
let itemArea2 = document.getElementById("items-2")
let itemArea3 = document.getElementById("items-3")
let itemArea4 = document.getElementById("items-4")

//Initialize the variabkes
let cartCount = 0 // Cart count
let savedProducts = [] // Cart products
let allProducts = [ // All products
    {
        // Creating a distinct area for each product
        id: 1,
        name: 'Noodles',
        image: 'products/noodles.png',
        price: 130
    },
    {
        id: 2,
        name: 'Rice',
        image: 'products/rice.png',
        price: 1200
    },
    {
        id: 3,
        name: 'Dhal',
        image: 'products/dhal.png',
        price: 2200
    },
    {
        id: 4,
        name: 'Potato',
        image: 'products/potato.png',
        price: 1230
    },
    {
         id: 5,
        name: 'Onion',
        image: 'products/onion.png',
        price: 320
    },
    {
        id: 6,
        name: 'Cabage',
        image: 'products/cabage.png',
        price: 550
    },
    {
        id: 7,
        name: 'Pumpking',
        image: 'products/pumpking.png',
        price: 1200
    },
    {
        id: 8,
        name: 'Carrot',
        image: 'products/carrot.png',
        price: 1200
    },
    {
        id: 9,
        name: 'Jack Fruit',
        image: 'products/jack.png',
        price: 1000
    },
    {
        id: 10,
        name: 'Beans',
        image: 'products/beans.png',
        price: 200
    },
    {
        id: 11,
        name: 'Chicken',
        image: 'products/chicken.png',
        price: 3000
    },
    {
        id: 12,
        name: 'Beef',
        image: 'products/beef.png',
        price: 3200
    },
    {
        id: 13,
        name: 'Pork',
        image: 'products/pork.png',
        price: 3300
    },
    {
        id: 14,
        name: 'Mutton',
        image: 'products/mutton.png',
        price: 4000
    },
    {
        id: 15,
        name: 'Sausage',
        image: 'products/sausage.png',
        price: 1200
    },
    {
        id: 16,
        name: 'Purified Water',
        image: 'products/water.png',
        price: 180
    },
    {
        id: 17,
        name: 'Coffee Bottle',
        image: 'products/coffee.png',
        price: 900
    },
    {
        id: 18,
        name: 'Lime Bottle',
        image: 'products/lime.png',
        price: 980
    },
    {
        id: 19,
        name: 'Coca Cola',
        image: 'products/coke.png',
        price: 500
    },
    {
        id: 20,
        name: 'Pepsi',
        image: 'products/pepsi.png',
        price: 500
    }
];

// Creating the function to render products to catergory 1
function addProducts1(){
    allProducts.forEach((value,key) => {
        if(key >= 0 && key <= 4){
            let newDiv = document.createElement('div'); // Creating a div
            newDiv.classList.add('product'); //Adding a class

            // Rendering the html
            newDiv.innerHTML = ` 
                <div class="product-image">
                    <img src="${value.image}" alt="product-${value.id}">
                </div>

                <div class="description">${value.name}</div>
                <div class="price">Rs. ${value.price}</div>  

                <div class="cart-button">
                    <button onclick="donateNow(${key})">Donate Now</button>
                    <button onclick="addProductToCart(${key})">Add to Cart</button>
                </div>
            `

            // Appending to the html document
            itemArea1.appendChild(newDiv)
        }    
    })
}

// Creating the function to render products to catergory 2
function addProducts2(){
    allProducts.forEach((value,key) => {
        if(key >= 5 && key <= 9){
            let newDiv = document.createElement('div'); // Creating a div
            newDiv.classList.add('product');//Adding a class

             // Rendering the html
            newDiv.innerHTML = `
                <div class="product-image">
                    <img src="${value.image}" alt="product-${value.id}">
                </div>

                <div class="description">${value.name}</div>
                <div class="price">Rs. ${value.price}</div>  

                <div class="cart-button">
                    <button onclick="donateNow(${key})">Donate Now</button>
                    <button onclick="addProductToCart(${key})">Add to Cart</button>
                </div>
            `
            // Appending to the html document
            itemArea2.appendChild(newDiv)
        }    
    })
}

// Creating the function to render products to catergory 3
function addProducts3(){
    allProducts.forEach((value,key) => {
        if(key >= 10 && key <= 14){
            let newDiv = document.createElement('div'); // Creating a div
            newDiv.classList.add('product'); //Adding a class

            // Rendering the html
            newDiv.innerHTML = `
                <div class="product-image">
                    <img src="${value.image}" alt="product-${value.id}">
                </div>

                <div class="description">${value.name}</div>
                <div class="price">Rs. ${value.price}</div>  

                <div class="cart-button">
                    <button onclick="donateNow(${key})">Donate Now</button>
                    <button onclick="addProductToCart(${key})">Add to Cart</button>
                </div>
    
            `
            // Appending to the html document
            itemArea3.appendChild(newDiv)
        }    
    })
}

// Creating the function to render products to catergory 4
function addProducts4(){
    allProducts.forEach((value,key) => {
        if(key >= 15 && key <= 19){
            let newDiv = document.createElement('div'); // Creating a div
            newDiv.classList.add('product'); //Adding a class

            // Rendering the html
            newDiv.innerHTML = `
                <div class="product-image">
                    <img src="${value.image}" alt="product-${value.id}">
                </div>

                <div class="description">${value.name}</div>
                <div class="price">Rs. ${value.price}</div>  

                <div class="cart-button">
                    <button onclick="donateNow(${key})">Donate Now</button>
                    <button onclick="addProductToCart(${key})">Add to Cart</button>
                </div>
                `
            
            // Appending to the html document
            itemArea4.appendChild(newDiv)
        }    
    })
}


// Creating function to add products to cart
function addProductToCart(key){
    // Check wheather relavent index is null
    if(savedProducts[key] == null){
        // Copying the data from all product arrays
        savedProducts[key] = JSON.parse(JSON.stringify(allProducts[key]))
        savedProducts[key].total = allProducts[key].price
        savedProducts[key].quantity = 1
        cartCount += 1

        // Showing prompt as items added
        let prompt = document.getElementById('prompt');
        prompt.style.zIndex = "5"
        prompt.classList.add('show');

        // Showing it for 1.5 sec
        setTimeout(function() {
            prompt.classList.remove('show');
            prompt.style.zIndex = "4"
        }, 1500);
                
        reloadCart()

    }
    else{
        // Showing prompt as already item in cart
        let prompt = document.getElementById('prompt');
        let text = document.getElementById('text-bar');

        text.innerText = 'Item already in cart !'
                
        let img = document.getElementById('tick-icon');
        img.src = 'image-other/cross.png';

        prompt.classList.remove('prompt');
        prompt.classList.add('prompt-2')
                
        prompt.style.zIndex = "5"
        prompt.classList.add('show');

        // Removing after 1.5s
        setTimeout(function() {
            prompt.classList.remove('show');
        }, 1500);
                
        setTimeout(function(){
            prompt.classList.add('prompt');
            prompt.classList.remove('prompt-2')
                    
            prompt.style.zIndex = "4"

            img.src = 'image-other/tick.png';
            text.innerText = 'Item added to shopping cart!'
                
        },2000)

    }
}

// Creating the function to reload the cart
function reloadCart(){   
    // Creating variables
    let cartTotal = 0
    // Clearing the html
    cartItems.innerHTML = ``
    
    // Rendering for every element in cart array
    savedProducts.forEach((value,key) => {
        let newDiv = document.createElement('div'); // Creating new div
        newDiv.classList.add('item'); // Adding class
        // Rendering html
        newDiv.innerHTML = `
            <img class="item-img" src="${value.image}" alt="product-${value.id}">
            <div class="name-cart">${value.name}</div>
            <div class="price-cart">Rs. ${value.price}</div>

            <div class="quantiy-bar">
                <button onclick="changeQuantity(${key},${savedProducts[key].quantity - 1})" style="width: 25px;height: 20px;">-</button>  
                <div>${value.quantity}</div>
                <button onclick="changeQuantity(${key},${savedProducts[key].quantity + 1})" style="width: 25px;height: 20px;">+</button>
            </div>

            <div>Rs. ${value.total}</div>
            <div class="dust-ig" onclick="deleteProduct(${key})" ><img class="dust" src="image-other/dust.png" alt=""></div>
            `
        // Appending to html and incrementing total    
        cartItems.appendChild(newDiv);
        cartTotal += value.total
    })

    // Updating the cart count
    cartCountDisplay.innerText = cartCount

    // Show cart is empty if cart count is zero
    if(cartCount == 0){
        cartTotalPrice.innerHTML = ``
        cartItems.innerHTML = `
            <h2>Your cart is Empty</h2>
        `
        
    }else{
        // Show total and save total in local storage
        cartTotalPrice.innerHTML = `<div id="total">Your Cart Total : Rs. ${cartTotal}<div>`
        try{
            localStorage.setItem('total',cartTotal)
        }catch(error){
            console.log("error")
        }
    }
}


// Creating function to change quantity
function changeQuantity(key,quantity){

    // Adjusting quantity and prices
    savedProducts[key].quantity = quantity
    savedProducts[key].total = savedProducts[key].price * savedProducts[key].quantity

    // If quantity is zero deleting
    if(savedProducts[key].quantity == 0){
        deleteProduct(key)
    }

    reloadCart() //Reloading cart
}


// Creating function to delete products
function deleteProduct(key){
    delete savedProducts[key]
    cartCount -= 1 // Reducing cart count
    reloadCart() // Reloading cart
}

// Creating function to donate now
function donateNow(key){
    // Saving the total in localStorage
    try{
        localStorage.setItem('total',allProducts[key].price)
    }catch(error){
        console.log("error")
    }    

    // Proceed to checkout
    window.location.href = 'checkout.html'
}

// Crrating the function to move smoothly when catergory pressed
function smoothPage(){
    const links = document.querySelectorAll('a[href^="#"]'); // Selecting the cattergries
    
    links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) { // Adding smoooth effect
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
}

       
// When clicked cart icon opening the cart
cartIcon.onclick = function cart(){
    mainContainer.style.transform = "translateX(-100px)" // Moving the product area
    cartArea.classList.add("cartArea-Opened") // Adding cart open
}

// When clicked cart close
cartClose.onclick = function removeCart(){
    mainContainer.style.transform = "none" // Setting the moved area to default
    cartArea.classList.remove("cartArea-Opened") // Removing the opened cart (class)
}

// When user click checkout
cartCheckout.onclick = function cartCheckoutShow(){
    if(cartCount != 0){ // Check wheather products are not zero
        window.location.href = 'checkout.html' // Proceeding to checkout html
    }    
}

// Calling the functions and initializing
reloadCart()
smoothPage()
addProducts1()
addProducts2()
addProducts3()
addProducts4()