let questionTrack = 1; // current question

// Function to handle moving to the next question
function nextQuestion(question) {
    
    // Get profile details container
    const profileDetails = document.getElementById('profile-details');

    // Get current and next question elements
    let questionElement = document.getElementById(`question-${question}`);
    let nextQuestionElement = document.getElementById(`question-${question + 1}`);

    // remove question if answered
    if (document.getElementById(`${question}`)){
        document.getElementById(`${question}`).remove();
    }

    // Handle skipping questions
    if (skipQuestion.length === 0 && questionTrack != null){//
        questionElement = document.getElementById(`question-${questionTrack}`);
        nextQuestionElement = document.getElementById(`question-${questionTrack+1}`);
    }
    else if (skipQuestion.includes(question)) {
        let index = skipQuestion.indexOf(question);
        if (index > -1) {
            if (skipQuestion.length === 1){
                nextQuestionElement = document.getElementById(`question-${questionTrack}`);
            }
            else{
                nextQuestionElement = document.getElementById(`question-${skipQuestion[index+1]}`);
            }
            skipQuestion.splice(index, 1); // 2nd parameter means remove one item only (remove skipped question from array)
        }

    }

    // Validate age input for question 3
    if (question === 3) {
        const age = document.getElementById(`question${question}`).value
        if (age>150 || age<0){
            document.getElementById(`required${question}`).style.opacity = '1';
            return false
        }
    }

    // Validate required fields
    if (document.getElementById(`question${question}`).value === "" && question === 1) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 2) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 3) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 4) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (!document.getElementById(`question${question}`).checked && question === 5) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 6) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 7) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 8) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }
    else if (document.getElementById(`question${question}`).value === "" && question === 9) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }else if (document.getElementById(`question${question}`).value === "" && question === 10) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }else if (document.getElementById(`question${question}`).value === "" && question === 11) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }else if (document.getElementById(`question${question}`).value === "" && question === 12) {
        document.getElementById(`required${question}`).style.opacity = '1';
        return false;
    }

    // Update question track
    if (question >= questionTrack) {
        questionTrack = question + 1;
    }


    // Update profile details based on user input
    // Hide current question and show next question
    questionElement.style.display = 'none';
    if (nextQuestionElement) {
        nextQuestionElement.style.display = 'block';
    }
    else {
        // If there's no next question, show the profile output
        document.getElementById('profile-details').style.display = 'block';
    }

    const progress = ( question / 12) * 100; // Adjusting value for progress bar

    // Update profile details based on user input
    if (question === 1) {
        profileDetails.innerHTML += `<div class="capitalize"><p id="A${question}">Name : ${document.getElementById(`question${question}`).value}</p></div>`;
    }
    else if (question === 2) {
        profileDetails.innerHTML += `<div class="capitalize"><p id="A${question}">Surname : ${document.getElementById(`question${question}`).value}</p></div>`;
    }
    else if (question === 3) {
        profileDetails.innerHTML += `<p id="A${question}">Age : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 4) {
        profileDetails.innerHTML += `<div class="capitalize"><p id="A${question}">Gender : ${document.getElementById(`question${question}`).value}</p></div>`;
    }
    else if (question === 5) {
        profileDetails.innerHTML += `<p>Agree to Terms : ${document.getElementById(`question${question}`).checked ? 'Yes' : 'No'}</p><hr>`;
        document.getElementById('progress-indicator').style.width = `${progress}%`;
    }
    else if (question === 6) {
        profileDetails.innerHTML += `<p id="A${question}">Email : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 7) {
        profileDetails.innerHTML += `<p id="A${question}">Phone : ${document.getElementById(`question${question}`).value}</p><hr>`;
        document.getElementById('progress-indicator').style.width = `${progress}%`;
    }
    else if (question === 8) {
        profileDetails.innerHTML += `<p id="A${question}">Hobby : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 9) {
        profileDetails.innerHTML += `<p id="A${question}">Experience : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 10) {
        profileDetails.innerHTML += `<p id="A${question}">Event hosting interest : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 11) {
        profileDetails.innerHTML += `<p id="A${question}">Income level : ${document.getElementById(`question${question}`).value}</p>`;
    }
    else if (question === 12) {
        profileDetails.innerHTML += `<p id="A${question}">Preferred method of communication : ${document.getElementById(`question${question}`).value}</p>`;
        document.getElementById('progress-indicator').style.width = `${progress}%`;
    }


    // Remove current question from the code
    document.getElementById(`question-${question}`).remove();
}

// Array to store skipped questions
var skipQuestion = [];

// Function to handle skipping questions
function skip(question) {
    // Add skipped question to array
    if (!skipQuestion.includes(question)){
        skipQuestion.push(question);
    }
    if (question >= questionTrack) {
        questionTrack = question + 1;
    }
    const skipped = document.getElementById('skip');
    const questionElement = document.getElementById(`question-${question}`);
    var nextQuestionElement = document.getElementById(`question-${question + 1}`);

    // Update question elements
    if (skipQuestion.includes(question) && skipQuestion.length>1) {
        let index = skipQuestion.indexOf(question);
        if (index > -1) {
            if (skipQuestion.length === 1){
                nextQuestionElement = document.getElementById(`question-${questionTrack}`);
            }
            else if (skipQuestion.indexOf(question)<skipQuestion.length-1){
                nextQuestionElement = document.getElementById(`question-${skipQuestion[index+1]}`);
            }
        }
    }

    // Hide current question and show next question
    questionElement.style.display = 'none';
    if (nextQuestionElement) {
        nextQuestionElement.style.display = 'block';
    } else {
        // If there's no next step, show the profile output
        document.getElementById('profile-details').style.display = 'block';
    }
    if (!document.getElementById(`${question}`)){
        skipped.innerHTML += `<a href="javascript:skipNext(${question})"><p id="${question}">${document.getElementById(`question-${question}`).querySelector(".placeholder").textContent}</p></a>`;
    }
}

// Function to handle skipping questions through the function(skip)
function skipNext(question) {
    const questionElement = document.getElementById(`question-${questionTrack}`);
    const nextQuestionElement = document.getElementById(`question-${question}`);

    if (document.getElementById(`${question}`)) {
        document.getElementById(`${question}`).remove();
    }

    if(questionElement){
        questionElement.style.display = 'none';
    }
    nextQuestionElement.style.display = 'block';
}