const cityCollection = [ 
    {
        name: "Reykjavík"
    },    
    {
        name: "Kópavogu"
    },
    {
        name: "Hafnarfjörður"
    },
    {
        name: "Keflavík"
    },
    {
        name: "Akureyri"
    },
    {
        name: "Garðabær"
    },
    {
        name: "Mosfellsbær"
    },
    {
        name: "Selfoss"
    },
    {
        name: "Selfoss"
    },
    {
        name: "Akranes"
    },
    {
        name: "Fjarðabyggð"
    },
]

export function useCity() {
    return cityCollection.slice()
}