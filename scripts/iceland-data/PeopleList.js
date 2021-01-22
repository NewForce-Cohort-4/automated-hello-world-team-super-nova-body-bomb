import { usePeople } from "./PeopleDataProvider.js";

import { People } from "./people.js";

let peopleContainer = document.querySelector("#list-people");

export function PeopleList() {

    const allPeople = usePeople();

    let peopleListHTMLString = "";
    
    for (const currentPeopleInLoop of allPeople) {
        //console.log(currentTipInLoop);
        peopleListHTMLString += People(currentPeopleInLoop);
    }   
    //console.log(tipListHTMLString);
    peopleContainer.innerHTML = `<h2>Famous People</h2>${peopleListHTMLString}`
}
