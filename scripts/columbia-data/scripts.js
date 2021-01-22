import { cityCol } from "./columbia-cities/CityList.js";
import { landCol } from "./columbia-landmarks/LandmarkList.js";
import { celebCol } from "./columbia-people/CelebList.js";

cityCol();
landCol();
celebCol();



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
    img.src = './images/colombia-scene1-tb.jpg';            
})

bog.addEventListener('mouseenter', e => {
    if (e.target === bog) {
        img.src = './images/bogota-tb.png';
    }        
})

bog.addEventListener('mouseleave', e => {
    img.src = './images/colombia-scene1-tb.jpg';            
})

mede.addEventListener('mouseenter', e => {
    if (e.target === mede) {
        img.src = './images/medellin-tb.png';
    }        
})

mede.addEventListener('mouseleave', e => {
    img.src = './images/colombia-scene1-tb.jpg';            
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
