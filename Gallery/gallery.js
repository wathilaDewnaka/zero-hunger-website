//initiate variables and load desired objects from html
var mainImage = document.getElementById("mainImg");
var image = document.getElementsByClassName("gallery");
var caption = document.getElementsByTagName("p");
var leftArrow = document.getElementsByClassName("left-arrow");
var rightArrow = document.getElementsByClassName("right-arrow");
var fonts = document.getElementsByClassName("font");
var color = document.getElementsByClassName("bg-color");
var opacity = 0;
var currentIndex = 0;// variable to track current running image index

document.addEventListener("visibilitychange", function() {//function to reload page if page is put in background
    if (document.hidden){
        console.log("Browser tab is hidden")
    } else {
        console.log("Browser tab is visible")
        location.reload();
    }
});

for (let i = 0; i<fonts.length;i++ ){
    fonts[i].addEventListener(//click detector to change font
        "click", function (){
            fonts[i].style.border = "2.3px solid #ee4b2b";//set red border around chosen font for highlighting
            switch (fonts[i].alt){//switch case to change font depending on clicked font type
                case "poppins":
                    document.body.style.fontFamily = "Poppins";//set font type
                    fonts[1].style.border = "1.8px solid grey";//set other font choices border to default
                    fonts[2].style.border = "1.8px solid grey";
                    break;

                case "arial":
                    document.body.style.fontFamily = "Arial";
                    fonts[0].style.border = "1.8px solid grey";
                    fonts[2].style.border = "1.8px solid grey";
                    break;

                case "TNR":
                    document.body.style.fontFamily = "Times New Roman";
                    fonts[0].style.border = "1.8px solid grey";
                    fonts[1].style.border = "1.8px solid grey";
                    break;
                default:
                    break;
            }
        }
    )
}

for (let i = 0; i<color.length;i++ ){
    color[i].addEventListener(//click detector to change bg color
        "click", function (){
            color[i].style.border = "2.3px solid #ee4b2b";//set red border around chosen bg color for highlighting
            switch (color[i].alt){//switch case to change bg color depending on clicked font type
                case "white":
                    document.body.style.backgroundColor = "White";//set bg color
                    document.getElementsByClassName("nav-bar")[0].style.backgroundColor = "White";// set header bg color to same color
                    document.getElementsByTagName("h2")[0].style.color = "Black";// set header text color for better visibility
                    document.body.style.color = "Black";//set text color for better visibility
                    color[1].style.border = "1.8px solid grey";
                    color[2].style.border = "1.8px solid grey";
                    break;

                case "black":
                    document.body.style.backgroundColor = "#36454f";
                    document.getElementsByClassName("nav-bar")[0].style.backgroundColor = "#36454f";
                    document.getElementsByTagName("h2")[0].style.color = "White";
                    document.body.style.color = "White";
                    color[0].style.border = "1.8px solid grey";
                    color[2].style.border = "1.8px solid grey";
                    break;

                case "cream":
                    document.body.style.backgroundColor = "#f9e4bc";
                    document.getElementsByClassName("nav-bar")[0].style.backgroundColor = "#f9e4bc";
                    document.getElementsByTagName("h2")[0].style.color = "Black";
                    document.body.style.color = "Black";
                    color[0].style.border = "1.8px solid grey";
                    color[1].style.border = "1.8px solid grey";
                    break;
                default:
                    break;
            }
        }
    )
}

function captionClean(temp){//function to make unused captions invisible and used caption visible
    for (let j = 0; j<caption.length;j++) {
        if (caption[j] === caption[temp]){
            caption[j].style.opacity = 1;//make used caption visible
        }
        else{
            caption[j].style.opacity = 0;//make rest of the captions invisible
            console.log(j);
        }

    }
}

function transition(element){//function to add transition when changing image and caption
    if(opacity<1){
        opacity+=0.01;//increase opacity in increments to show transition effect
        setTimeout(function(){transition(element)},10);
    }
    element.style.opacity = opacity;
}


function slideShow () {//function that changes the current image and caption every 7 seconds
    if (image[currentIndex].src === mainImage.src) {
        opacity = 0;
        mainImage.style.opacity = opacity;
        if (currentIndex !== image.length - 1) {//check if end of gallery is reached
            captionClean(currentIndex+1);//get caption
            mainImage.src = image[currentIndex + 1].src;//set main Image
            mainImage.alt = image[currentIndex + 1].alt;
            transition(mainImage);//make image visible using transition
            currentIndex++;// track current image
        } else {//if end of gallery reached
            captionClean(0);
            mainImage.src = image[0].src;
            mainImage.alt = image[0].alt;
            transition(mainImage);
            currentIndex = 0;
        }
    } else {
        currentIndex++;
    }
    clearTimeout(slide);//rerun slideshow
    setTimeout(slideShow, 7000);
}

leftArrow[0].addEventListener(//check if back arrow clicked
    "click",function (){
        clearTimeout(slide)//stop slideshow
        opacity = 0;
        //change image and caption accordingly
        mainImage.style.opacity = opacity
        caption[currentIndex].style.opacity = 0;
        if(currentIndex-1<0){
            currentIndex = 10;
        }
        caption[currentIndex-1].style.opacity = 1;
        mainImage.src = image[currentIndex-1].src;
        mainImage.alt = image[currentIndex-1].alt;
        transition(mainImage);
        currentIndex-=1;//mark current running image
        slide = setTimeout(slideShow, 7000);//re-run slideshow
    }
)

rightArrow[0].addEventListener(//check if back arrow clicked
    "click",function (){
        clearTimeout(slide)//stop slideshow
        opacity = 0;
        //change image and caption accordingly
        mainImage.style.opacity = opacity
        caption[currentIndex].style.opacity = 0;
        if (currentIndex+1>9){
            currentIndex = -1;
        }
        caption[currentIndex+1].style.opacity = 1;
        mainImage.src = image[currentIndex+1].src;
        mainImage.alt = image[currentIndex+1].alt;
        transition(mainImage);
        currentIndex++;//mark current running image
        slide = setTimeout(slideShow, 7000);//re-run slideshow
    }
)

for (let i = 0; i<image.length; i++){//variable to change current image if the user uses thumbnail
    image[i].addEventListener(
        "click",function (){
            clearTimeout(slide)//stop slideshow
            opacity = 0;
            //get caption of clicked thumbnail
            for(let j = 0; j<caption.length;j++){
                if(caption[j].getAttribute("id") === this.alt){
                    captionClean(j);
                }
            }
            //set relevant image
            mainImage.style.opacity = opacity;
            mainImage.src = this.src;
            mainImage.alt = this.alt;
            transition(mainImage);

            currentIndex = Number(mainImage.alt.substring(3,))-1;//update current index
            slide = setTimeout(slideShow, 7000);//re-run slideshow
        }
    );
}

let slide = setTimeout(slideShow, 7000);//run slideshow for the first time to make it loop
