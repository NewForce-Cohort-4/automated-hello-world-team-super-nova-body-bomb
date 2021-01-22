import { htmlObjectMakerFunction } from './htmlObject.js'
//function calls htmlobject function with parameter of category to determin which values are converted to html string. Function then prints that string to html target element of the same name
export const printer = (printerCategory) => {
   let htmlList = htmlObjectMakerFunction(printerCategory)
   document.querySelector(`#${printerCategory}`).innerHTML = htmlList
   console.log(htmlList)
    }
