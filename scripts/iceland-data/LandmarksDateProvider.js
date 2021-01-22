const landmarkCollection = [
    { 
        name: "Solfarid Sculpture"
    },   
    { 
        name: "Lake Myvatn"
    },
    { 
        name: "Hallgrímskirkja Church"
    },
    { 
        name: "Hvitserkur"
    },
    { 
        name: "Thingvellir National Park"
    },    
    { 
        name: "Geysir/Strokkur"
    },
    { 
        name: "Gullfoss"
    },
    { 
        name: "The Blue Lagoon"
    },
    { 
        name: "Jokulsarlon Glacier Lagoon (and the Diamond Beach)"
    },
]

export function useLandmark() {
    return landmarkCollection.slice()
}