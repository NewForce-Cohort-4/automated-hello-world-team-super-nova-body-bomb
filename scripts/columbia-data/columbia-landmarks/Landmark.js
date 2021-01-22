export const landmarkElement = (landmarkObject) => {
    return `
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><img src="${landmarkObject.img}" alt="${landmarkObject.place}" class="d-none"></li>
        <li class="list-group-item d-flex justify-content-between align-items-center" id="${landmarkObject.place}"><h6>${landmarkObject.place}</h6></li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Learn more @ <span class="badge badge-pill bg-info p-2"><a href="${landmarkObject.wiki}" class="text-decoration-none text-white fw-bold fs-6">Wikipedia</a></span></li>
    </ul>
    `
};