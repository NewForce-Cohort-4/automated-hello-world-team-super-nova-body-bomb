//array of objects that represent countries. Only one currently
let country = 
    {
    countryName:'Portugal',
    cities:['Lisbon', 'Porto', 'Coimbra',],
    landmarks:['Belem Tower', 'Park and National Palace of Pena' , 'Castelo de S. Jorge'],
    famousPeople: ['Cristiano Ronaldo', 'Vasco da Gama', 'Fernando Pessoa']    
    }

// function that provides a copy of data from the country object
export const copyOfCountryFunction = () => {
    
    return country
}

