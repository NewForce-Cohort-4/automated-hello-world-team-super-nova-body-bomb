export const celebElement = (celebObject) => {
    return `
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><img src="${celebObject.img}" alt="${celebObject.name}" class="d-none"></li>
        <li class="list-group-item d-flex justify-content-between align-items-center" id="${celebObject.id}"><h6>${celebObject.name}</h6></li>
        <li class="list-group-item d-flex justify-content-between align-items-center">Learn more @ <span class="badge badge-pill bg-info p-2"><a href="${celebObject.wiki}" class="text-decoration-none text-white fw-bold fs-6">Wikipedia</a></span></li>
    </ul>
  `
};