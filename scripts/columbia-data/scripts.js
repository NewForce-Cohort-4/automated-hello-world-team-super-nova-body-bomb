import { cityCol } from "./columbia-cities/CityList.js";
import { landCol } from "./columbia-landmarks/LandmarkList.js";
import { celebCol } from "./columbia-people/CelebList.js";

cityCol();
landCol();
celebCol();


// City Event Listners

const img = document.querySelector("#city-card");
const barr = document.querySelector("#Barranquilla")
const mede = document.querySelector("#Medellín")
const bog = document.querySelector("#Bogotá")


barr.addEventListener('mouseenter', e => {
    if (e.target === barr) {
        img.src = './images/barranquilla-tb.png';
    }        
})

barr.addEventListener('mouseleave', e => {
    img.src = './images/cities-tb.png';            
})

bog.addEventListener('mouseenter', e => {
    if (e.target === bog) {
        img.src = './images/bogota-tb.png';
    }        
})

bog.addEventListener('mouseleave', e => {
    img.src = './images/cities-tb.png';            
})

mede.addEventListener('mouseenter', e => {
    if (e.target === mede) {
        img.src = './images/medellin-tb.png';
    }        
})

mede.addEventListener('mouseleave', e => {
    img.src = './images/cities-tb.png';            
})

// Landmark Event Listners

const img2 = document.querySelector("#location-card")

const ros = document.querySelector("#rosario")
const coco = document.querySelector("#cocora")
const cat = document.querySelector("#catedral")

ros.addEventListener('mouseenter', e => {
    img2.src = './images/rosario-islands-tb.png';      
})

ros.addEventListener('mouseleave', e => {
    img2.src = './images/colombia-scene1-tb.jpg';            
})

coco.addEventListener('mouseenter', e => {
    img2.src = './images/cocora-tb.png';      
})

coco.addEventListener('mouseleave', e => {
    img2.src = './images/colombia-scene1-tb.jpg';            
})

cat.addEventListener('mouseenter', e => {
    img2.src = './images/catedral-tb.png';      
})

cat.addEventListener('mouseleave', e => {
    img2.src = './images/colombia-scene1-tb.jpg';            
})

// People Event Listners

const img3 = document.querySelector("#people-card");

const shakira = document.querySelector("#shakira");
const sofia = document.querySelector("#sofia");
const leg = document.querySelector("#john");

shakira.addEventListener('mouseenter', e => {
    img3.src = './images/shakira-tb.png';      
})

shakira.addEventListener('mouseleave', e => {
    img3.src = './images/people-tb.png';            
})

leg.addEventListener('mouseenter', e => {
    img3.src = './images/john-leguizamo-tb.png';      
})

leg.addEventListener('mouseleave', e => {
    img3.src = './images/people-tb.png';            
})

sofia.addEventListener('mouseenter', e => {
    img3.src = './images/sofia-vergara-tb.png';      
})

sofia.addEventListener('mouseleave', e => {
    img3.src = './images/people-tb.png';            
})

// barr.onmouseover = function barrOver() {
//         img.src = './images/barranquilla-tb.jpg'
//         if (barr.onmouseover === false) {
//             img.src = './images/columbia-scene1-tb.jpg'
//             console.log("Hover ended!");
//         }
// };


// barr.onmouseover = function() {
//     img.src = './images/barranquilla-tb.jpg'
// }

// barr.onmouseleave = function() {
//     img.src = './images/columbia-scene1-tb.jpg'
// }




// const thumbRoll = (imgObject) => {
//         for (const iterator of object) {
            
//         }
// };
