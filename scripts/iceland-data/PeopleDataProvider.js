const peopleCollection = [
    {
        name: "Björk; Singer/Songwriter"
    },
    {
        name: "Vigdís Finnbogadóttir; Former President, 1980-1996"
    },
    {
        name: "Bjarni Tryggvason, Astronaut and Scientist"
    },  
    {
        name: "Hafþór Júlíus Björnsson: Professional strongman"
    },
]

export function usePeople() {
    return peopleCollection.slice()
}