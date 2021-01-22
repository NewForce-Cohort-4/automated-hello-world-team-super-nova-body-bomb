import { copyOfCountryFunction } from "./countryData.js"

export const htmlObjectMakerFunction = (category) => {
    let htmlObjectRender = ""
    let country = copyOfCountryFunction()
    let chosenData = country[category]
    
    for (const currentData of chosenData){
        htmlObjectRender += `<li>${currentData}</li>`
        }
        console.log(htmlObjectRender)
        return htmlObjectRender
    }

    
    
