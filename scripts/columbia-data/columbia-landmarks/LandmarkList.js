import { landmarkData } from "./LandmarkDataProvider.js";
import { landmarkElement } from "./Landmark.js";

export const landCol = () => {
    let landTarget = document.querySelector("#list-landmarks")
    
    const landmarkDataAll = landmarkData();

    for (const myLand of landmarkDataAll) {
        landTarget.innerHTML += landmarkElement(myLand);
    }
};