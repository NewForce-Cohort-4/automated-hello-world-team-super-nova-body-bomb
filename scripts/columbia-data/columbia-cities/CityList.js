import { cityData } from "./CityDataProvider.js";
import { cityElement } from "./City.js";

export const cityCol = () => {
    let cityTarget = document.querySelector("#list-cities");

    const cityDataAll = cityData();

    for (const cityIndex of cityDataAll) {
        cityTarget.innerHTML += cityElement(cityIndex);
    }
};

export const cityThumb = () => {
        const cityDataAll = cityData();
        let cityImgs = [];
        
        for (const aCity of cityDataAll) {
            cityImgs.push(aCity.img)
        }
        return cityImgs;      
};

