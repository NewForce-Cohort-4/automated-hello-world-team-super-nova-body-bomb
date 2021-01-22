import { useCity } from "./CitiesDataProvider.js";

import { Cities } from "./cities.js";

let cityContainer = document.querySelector("#list-cities");

export function CitiesList() {
    // let cityContainer = document.querySelector("#list-cities");
    const allCities = useCity();

    let cityListHTMLString = "";
    
    for (const currentCityInLoop of allCities) {
        //console.log(currentTipInLoop);
        cityListHTMLString += Cities(currentCityInLoop);
    }   
    //console.log(tipListHTMLString);
    cityContainer.innerHTML = `<h2>Cities</h2>${cityListHTMLString}`
}
