import { copyOfCountryFunction } from './countryData.js'
import { htmlObjectMakerFunction } from './htmlObject.js'


//function that writes compiled string of html representations of objects
//only one country currently, input country[0], category will be chosen category in string form; 'cities' or 'landmarks'
export const printer = (printerCategory) => {
   let htmlList = htmlObjectMakerFunction(printerCategory)
   document.querySelector(`#${printerCategory}`).innerHTML = htmlList
   console.log(htmlList)
    }
