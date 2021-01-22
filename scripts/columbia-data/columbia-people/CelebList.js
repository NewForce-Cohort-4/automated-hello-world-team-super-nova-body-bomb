import { celebData } from "./CelebritiesDataProvider.js";
import { celebElement } from "./Celeb.js";

export const celebCol = () => {
    let celebTarget = document.querySelector("#list-people")

    const celebDataAll = celebData();

    for (const celeb of celebDataAll) {
        celebTarget.innerHTML += celebElement(celeb);
    }
};