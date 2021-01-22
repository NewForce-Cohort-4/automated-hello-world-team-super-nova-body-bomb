const landmarkContainer = [
    {
        place: 'Rosario Islands',
        img: './images/rosario-islands-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Rosario_Islands'
    },
    {
        place: 'Cocora Valley',
        img: './images/cocora-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Cocora_Valley'
    },
    {
        place: 'Catedral de Sal',
        img: './images/catedral-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Salt_Cathedral_of_Zipaquirá'
    }
]

export const landmarkData = () => {
    return landmarkContainer.slice();
};