//Getting the total from html
let total = document.getElementById("totalShow")  


// Getting total value from local storage
try{
    total.innerHTML = `Total : Rs. ${localStorage.getItem('total')}`;
}catch(error){
    total.textContent = "Total : Rs. NaN"
}

// Creating function to validate checkout
function validateForm() {
    // Getting the values
    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let district = document.getElementById("district").value.trim();
    let postal = document.getElementById("postalCode").value.trim();
    let paymentMethod = document.getElementById("paymentMethod").value;


    // Checking wheaher not empty, if empty show a mesage
    if (fullName === "") {
        document.getElementById("fullNameError").innerHTML = "Please enter your full name";
    return false;
    } else{
        document.getElementById("fullNameError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage       
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    } else{
        document.getElementById("emailError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage
    if (phoneNumber === "") {
        document.getElementById("phoneNumberError").innerHTML = "Please enter your phone number";
        return false;
    }else{
        document.getElementById("phoneNumberError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage
    if(address === ""){
        document.getElementById("addressError").innerHTML = "Please enter your address"
        return false
    }else{
        document.getElementById("addressError").innerHTML = ``
    }


    // Checking wheaher not empty, if empty show a mesage
    if(city === ""){
        document.getElementById("cityError").innerHTML = "Please enter your city"
        return false
    }else{
        document.getElementById("cityError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage
    if(district === ""){
        document.getElementById("districtError").innerHTML = "Please enter your district"
        return false
    }else{
        document.getElementById("districtError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage
    if(postal === ""){
        document.getElementById("postalCodeError").innerHTML = "Please enter your postal code"
        return false
    }else{
        document.getElementById("postalCodeError").innerHTML = ``
    }

    // Checking wheaher not empty, if empty show a mesage
    if (paymentMethod === "") {
        document.getElementById("paymentMethodError").innerHTML = "Please select a payment method";
        return false;
    } else{
        document.getElementById("paymentMethodError").innerHTML = ``
    }

    // Checking wheaher paymetnt method is card
    if(paymentMethod === "creditCard"){
        // Getting the values
        let cardName = document.getElementById("nameCard").value.trim();
        let cardNo = document.getElementById("cardNumber").value.trim();
        let expMonth = document.getElementById("expMonth").value.trim();
        let CVV = document.getElementById("CVV").value.trim();

        // Checking wheaher not empty, if empty show a mesage
        if(cardName === ""){
            document.getElementById("nameCardError").innerHTML = "Please enter your card name";
            return false
        }else{
            document.getElementById("nameCardError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(cardNo === ""){
            document.getElementById("cardNumberError").innerHTML = "Please enter your card number";
            return false
        }else{
            document.getElementById("cardNumberError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(expMonth === ""){
            document.getElementById("expMonthError").innerHTML = "Please enter your card expire month";
            return false
        }else{
            document.getElementById("expMonthError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(CVV === ""){
            document.getElementById("CVVError").innerHTML = "Please enter your card CVV";
            return false
        }else{
            document.getElementById("CVVError").innerHTML = ``
        }



    }else{
        // Getting the values if paymethod method is paypal
        let paypalEmail = document.getElementById("ppemail").value.trim()
        let paypalPassword = document.getElementById("pppassword").value.trim();
        let billAddress = document.getElementById("billAddress").value.trim();
        let billingpostalCode = document.getElementById("billingpostalCode").value.trim();

        // Checking wheaher not empty, if empty show a mesage
        if(paypalEmail === ""){
            document.getElementById("paypalError").innerHTML = `Please enter your paypal email address`
            return false
        }else{
            document.getElementById("paypalError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(paypalPassword === ""){
            document.getElementById("passwordError").innerHTML = `Please enter your paypal password`
            return false
        }else{
            document.getElementById("passwordError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(billAddress === ""){
            document.getElementById("billingError").innerHTML = `Please enter your billing address`
            return false
        }else{
            document.getElementById("billingError").innerHTML = ``
        }

        // Checking wheaher not empty, if empty show a mesage
        if(billingpostalCode === ""){
            document.getElementById("billingCodeError").innerHTML = `Please enter your billing postal code`
            return false
        }else{
            document.getElementById("billingCodeError").innerHTML = ``
        }
                
    }

    return true;
}

// Check on submitibg the form
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault()

    if (validateForm()) { // If from valid show sucessfull message
        document.querySelector(".validate-message").innerHTML = `
                                                                        Products Purchased Sucessfully !<br>
                                                                        You will be redirected to shop !
                                                                        `
        setTimeout(() => {
            window.location.href = 'shop.html' // Redirect to shop by 3 seconds
        }, 3000);
    }
});

// On changing payment method show payment box
document.getElementById("paymentMethod").addEventListener("change", switchCard);

function switchCard() {
    // Getting the value
    let paymentMethod = document.getElementById("paymentMethod").value;

    // Showing and hiding the relavent payment based on selection
    if (paymentMethod === "creditCard") {
        document.querySelector(".payment-details").style.display = "block";
        document.querySelector(".paypal-details").style.display = "none";
    } else if (paymentMethod === "paypal") {
        document.querySelector(".paypal-details").style.display = "block";
        document.querySelector(".payment-details").style.display = "none";
    }else{
        document.querySelector(".payment-details").style.display = "none";
        document.querySelector(".paypal-details").style.display = "none";
    }
}
