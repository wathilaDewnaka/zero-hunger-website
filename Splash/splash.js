// Selecting the loader element
let loader = document.querySelector('.loader');

// Selecting the loading text element
let loading_text = document.getElementById('loading-text');

// Selecting the container element
let container = document.querySelector('.container');

// Setting a timeout function to run after 4000 milliseconds (4 seconds)
setTimeout(function() {
    // Making the loader element visible
    loader.style.display = 'block';

    // Making the loading text element visible
    loading_text.style.display = 'block';

    // Changing the opacity of the container element to 0 (making it invisible)
    container.style.opacity = '0';
}, 4000);

// Setting a timeout function to run after 5000 milliseconds (5 seconds)
setTimeout(function(){
        window.location.href = "../Home/home.html" // Redirect to home page
},5000)