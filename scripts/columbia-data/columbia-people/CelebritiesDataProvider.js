const celebContainer = [
    {
      name: 'Shakira',
      img: './images/shakira-tb.jpeg',
      wiki: 'https://en.wikipedia.org/wiki/Shakira',
      id: 'shakira'
    },
    {
      name: 'John Leguizamo',
      img: './images/john-leguizamo-tb.jpg',
      wiki: 'https://en.wikipedia.org/wiki/John_Leguizamo',
      id: 'john'
    },
    {
      name: 'Sofia Vergara',
      img: './images/sofia-vergara-tb.jpg',
      wiki: 'https://en.wikipedia.org/wiki/Sof%C3%ADa_Vergara',
      id: 'sofia'
    }
]

export const celebData = () => {
    return celebContainer.slice();
};