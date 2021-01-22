const cityContainer = [
    {
        name: 'Barranquilla',
        img: './images/barranquilla-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Barranquilla'
    },
    {
        name: 'Bogotá',
        img: './images/bogota-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Bogotá'
    },
    {
        name: 'Medellín',
        img: './images/medellin-tb.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Medell%C3%ADn'
    }
]

export const cityData = () => {
    return cityContainer.slice();
};