const celebContainer = [
    {
      name: 'Shakira',
      img: './images/shakira-tb.jpeg',
      wiki: 'https://en.wikipedia.org/wiki/Shakira'
    },
    {
      name: 'John Leguizamo',
      img: './images/john-eguizamo-tb.jpg',
      wiki: 'https://en.wikipedia.org/wiki/John_Leguizamo'
    },
    {
      name: 'Sofia Vergara',
      img: './images/sofia-vergara-tb.jpg',
      wiki: 'https://en.wikipedia.org/wiki/Sof%C3%ADa_Vergara'
    }
]

export const celebData = () => {
    return celebContainer.slice();
};