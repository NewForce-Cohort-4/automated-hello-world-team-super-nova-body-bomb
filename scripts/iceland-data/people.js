export function People(peopleObject){
    return `
    <section class="people-card"> 
    <div class="people-card__text">
        <ul>
            <li>${peopleObject.name}</li>
        </ul>
    </div>     
    </section>`
}