import { useLandmark } from "./LandmarksDateProvider.js";

import { Landmarks } from "./landmarks.js";

let landmarkContainer = document.querySelector("#list-landmarks");

export function LandmarksList() {
    // let cityContainer = document.querySelector("#list-cities");
    const allLandmarks = useLandmark();

    let landmarkListHTMLString = "";
    
    for (const currentLandmarkInLoop of allLandmarks) {
        //console.log(currentTipInLoop);
        landmarkListHTMLString += Landmarks(currentLandmarkInLoop);
    }   
    //console.log(tipListHTMLString);
    landmarkContainer.innerHTML = `<h2>Landmarks</h2>${landmarkListHTMLString}`
}