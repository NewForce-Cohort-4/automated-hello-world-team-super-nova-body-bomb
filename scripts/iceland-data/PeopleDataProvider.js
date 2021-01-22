const peopleCollection = [
    {
        name: "Björk; Singer/Songwriter"
    },
    {
        name: "Vigdís Finnbogadóttir; Former President, 1980-1996"
    },
    {
        name: "Halldór Laxness; Writer"
    },
    {
        name: "Bjarni Tryggvason; Astronaut and Scientist"
    },
    {
        name: "Gylfi Sigurðsson; Footballer"
    },    
    {
        name: "Stefan Karl Stefansson; Actor"
    },
    {
        name: "Hafþór Júlíus Björnsson; Professional strongman"
    },
]

export function usePeople() {
    return peopleCollection.slice()
}