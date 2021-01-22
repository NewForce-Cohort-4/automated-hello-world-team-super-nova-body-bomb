const peopleCollection = [
    {
        name: "Björk: Singer/Songwriter"
    },
    {
        name: "Vigdís Finnbogadóttir: Former President, 1980-1996"
    },
    {
        name: "Halldór Laxness: Writer of poetry, newspaper articles, plays, short stories and novels"
    },
    {
        name: "Halldór Laxness: Writer of poetry, newspaper articles, plays, short stories and novels"
    },
    {
        name: "Bjarni Tryggvason, Astronaut and Scientist"
    },
    {
        name: "Gylfi Sigurðsson: Footballer"
    },    
    {
        name: "Stefan Karl Stefansson: Actor"
    },
    {
        name: "Kolbeinn Sigþórsson: Footballer"
    },
    {
        name: "Hafþór Júlíus Björnsson: Professional strongman"
    },
    {
        name: "Arnaldur Indriðason: Writer"
    },
    {
        name: "Ólafur Jóhann Ólafsson: Writer and businessman"
    },
]

export function usePeople() {
    return peopleCollection.slice()
}