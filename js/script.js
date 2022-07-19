const sources = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg"];
console.log(sources)
let slider ="";
for(let i = 0; i < sources.length ; i++){
    slider += (`<img src="${sources[i]}" alt="${sources[i]}">`);
}

let currentActiveIndex = 0;
const prevButton = document.getElementById("left-slider");
const nextButton = document.getElementById("right-slider");

const arrayContainer = document.getElementById("img-container");
const thumbnails = document.getElementById("thumbnail")

arrayContainer.innerHTML = slider;
thumbnails.innerHTML = slider;

const images = document.querySelectorAll("#img-container img");
const thumbs = document.querySelectorAll("#thumbnail img");

images[currentActiveIndex].classList.add("active");
thumbs[currentActiveIndex].classList.add("active");

nextButton.addEventListener("click", function(){
    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");
    currentActiveIndex++
    if(currentActiveIndex === images.length){
        currentActiveIndex = 0;
    }
    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});

prevButton.addEventListener("click", function(){
    images[currentActiveIndex].classList.remove("active");
    thumbs[currentActiveIndex].classList.remove("active");
    if(currentActiveIndex === 0){
        currentActiveIndex = images.length - 1;
    }
    currentActiveIndex--
    images[currentActiveIndex].classList.add("active");
    thumbs[currentActiveIndex].classList.add("active");
});















