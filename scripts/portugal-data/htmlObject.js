import { copyOfCountryFunction } from "./countryData.js"
//import country object, export function that turns object values into html string. Function requires parameter to indicate which values to convert
export const htmlObjectMakerFunction = (category) => {
    let htmlObjectRender = ""
    let country = copyOfCountryFunction()
    let chosenData = country[category]
    
    for (const currentData of chosenData){
        htmlObjectRender += `<li>${currentData}</li>`
        }
        return htmlObjectRender
    }

    
    
