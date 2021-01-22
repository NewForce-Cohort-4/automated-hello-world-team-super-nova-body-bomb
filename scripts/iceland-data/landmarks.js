export function Landmarks(landmarkObject){
    return `
    <section class="landmark-card"> 
    <div class="landmark-card__text">
        <ul>
            <li>${landmarkObject.name}</li>
        </ul>
    </div>     
    </section>`
}