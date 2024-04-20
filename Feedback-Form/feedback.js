// validate the email :
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


// submition button :
function submitBtn(){
    let count = 0;

    let textAreaAlert = document.getElementById("feedbackID");
    let text = textAreaAlert.value;

    let name = document.getElementById("name-id");
    let userName = name.value;
    
    let email = document.getElementById("email-id");
    let userEmail = email.value;

    let emailArlet = document.getElementById("emai-alert");
    
    if(text===""){
        const alertMsgRed = document.querySelector(".alert-msg").style.color = "red";
    }
    else{
        const alertMsgWhite = document.querySelector(".alert-msg").style.color = "white";
        count++;
    }

    // validate the username :
    if(userName===""){
        const alertMsgRedName = document.querySelector(".alert-msg-name").style.color = "red";
    }else{
        const alertMsgWhileName = document.querySelector(".alert-msg-name").style.color = "white";
        count++;
    }

    
    // validate the user email :
    if(userEmail===""){
        emailArlet.innerHTML = "*Please enter you email";
        const alertMsgRedEmail = document.querySelector(".alert-msg-email").style.color = "red";
    }else{
        const alertMsgWhiteEmail = document.querySelector(".alert-msg-email").style.color = "white";
        emailArlet.innerHTML = "*Please enter you email";
        count++;
    }

    
    if (validateEmail(userEmail)) {
        const alertMsgWhiteEmail = document.querySelector(".alert-msg-email").style.color = "white";
        emailArlet.innerHTML = "*Please enter you email";
        count++;
    } else {
        if(userEmail!=""){
            const alertMsgRedEmail = document.querySelector(".alert-msg-email").style.color = "red";
            emailArlet.innerHTML = "*Invalid email format";
        }
        
    }

    // validate the ration :
    const selectedRadio = document.querySelector("input[type='radio'][name='rating']:checked");

    if (selectedRadio) {
        const alertMsgRadioWhite = document.querySelector(".alert-msg-one").style.color = "white";
        count++;
    } else {
        const alertMsgRadioRed = document.querySelector(".alert-msg-one").style.color = "red";
    }


    const selectedRadi0Service = document.querySelector("input[type='radio'][name='reccommend']:checked");
    if(selectedRadi0Service){
        document.querySelector(".select-one-service").classList.remove("display-block");
        document.querySelector(".select-one-service").classList.add("display-none");
        count++;
    }else{
        document.querySelector(".select-one-service").classList.remove("display-none");
        document.querySelector(".select-one-service").classList.add("display-block");
    }
    

    const selectedRadi0SNewsletter = document.querySelector("input[type='radio'][name='select-one']:checked");
    if(selectedRadi0SNewsletter){
        document.querySelector(".select-one-newsletter").classList.remove("display-block");
        document.querySelector(".select-one-newsletter").classList.add("display-none");
        count++;
    }else{
        document.querySelector(".select-one-newsletter").classList.remove("display-none");
        document.querySelector(".select-one-newsletter").classList.add("display-block");
    }


    if(count===7){
        document.querySelector(".form-container").classList.add("display-none");
        document.querySelector(".form-container").classList.remove("display-block");
        document.querySelector(".submition-complete").classList.add("display-block");
        

        // downloading the recipt :
        const dwon_Name = document.getElementById("name-id").value;
        const dwon_Email = document.getElementById("email-id").value;
        const rating = document.querySelector('input[type="radio"][name="rating"]:checked').value;
        const reasonForFeedback = document.getElementById("feedbackID").value;
        const serviceOption = document.querySelector('input[type="radio"][name="reccommend"]:checked').value;
        const newsletterOption = document.querySelector('input[type="radio"][name="select-one"]:checked').value;
        const completeTask = document.querySelector('select[name="task_completion"]').value;
        const completeTaskAgain = document.querySelector('select[name="task_preference"]').value;

        const textContent = `1. Enter your name : ${dwon_Name},
2. Enter your email : ${dwon_Email}\n,
3. How satisfied were you with our website today? Choose from 0 to 10, where 0 is extremely dissatisfied and 10 is extremely satisfied.,
${rating} out of 10\n,
4. Please could you tell us your reasons for giving this rating ?,
${reasonForFeedback}\n,
5. Would you like to reccommend out service to others ?,
${serviceOption}\n,
6. Would you like to recieve newsletters ?,
${newsletterOption}\n,
7. How did you want to complete this task today?,
${completeTask==="option" ? "Not Mention." : completeTask}\n,
8. If you had to complete this task again, how would you prefer to do it ?,
${completeTaskAgain==="option" ? "Not Mention." : completeTaskAgain}\n`;
                            
        const lines = textContent.split(','); // Split by comma

        const finalText = lines.join('\n');

        

        const blob = new Blob([finalText], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'Download.txt';
        link.click();
        
    }else{
        document.querySelector(".form-container").classList.add("display-block");
        document.querySelector(".submition-complete").classList.add("display-none");
    }
    count = 0;

    

}



function previewBtn(){

    document.querySelector(".preview-container").classList.remove("display-none");
    document.querySelector(".form-container").classList.remove("display-block");

    document.querySelector(".preview-container").classList.add("display-block");
    document.querySelector(".form-container").classList.add("display-none");

    
    
    const name =  document.getElementById("name-id").value;
    document.querySelector(".name-pre").innerHTML = "1. Name : "+ name;

    const email = document.getElementById("email-id").value;
    document.querySelector(".emai-pre").innerHTML = "2. Email : " + email;

    const rating = document.querySelector('input[type="radio"][name="rating"]:checked');
    if (rating) {
        document.querySelector(".satisfaction-pre-ans").innerHTML = rating.value + " out of 10.";
    }

    const reasonForFeedback = document.getElementById("feedbackID");
    document.querySelector(".rating-dis-pre-ans").innerHTML = reasonForFeedback.value + ".";

    const serviceOption = document.querySelector('input[type="radio"][name="reccommend"]:checked');
    if(serviceOption){
        document.querySelector(".service-pre-ans").innerHTML = serviceOption.value + ".";
    }

    const newsletterOption = document.querySelector('input[type="radio"][name="select-one"]:checked');
    if(newsletterOption){
        document.querySelector(".newsletter-pre-ans").innerHTML = newsletterOption.value + ".";
    }

    const completeTask = document.querySelector('select[name="task_completion"]');
    document.querySelector(".complete-pre-ans").innerHTML = completeTask.value==="option" ? "Not Mention." : completeTask.value+".";

    const completeTaskAgain = document.querySelector('select[name="task_preference"]');
    document.querySelector(".complete-again-pre-ans").innerHTML = completeTaskAgain.value==="option" ? "Not Mention." : completeTaskAgain.value+".";
}


function backBtn(){

    document.querySelector(".preview-container").classList.remove("display-block");
    document.querySelector(".form-container").classList.remove("display-none");

    document.querySelector(".preview-container").classList.add("display-none");
    document.querySelector(".form-container").classList.add("display-block");
}

