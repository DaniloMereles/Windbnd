import {createContext, useState, useEffect} from 'react'

export const ApartmentContext = createContext()

export const ApartmentProvider = ({children}) => {
    const [Apartments, setApartments] = useState([])
    const [ShowLocations, setShowLocation] = useState(false)
    const [ShowAddGuests, setShowAddGuests] = useState(false)
    const [FilterApartments, setFilterApartments] = useState([])

    useEffect(()=>{
        fetch('https://api.jsonbin.io/b/60903da8d64cd16802a89231')
        .then(response => response.json())
        .then(response => {
            setApartments(response)
            setFilterApartments(response)
        })
        .catch(() => {
            console.log('error')
        })
    }, [])

    return (
        <ApartmentContext.Provider value = {{FilterApartments, setFilterApartments, Apartments, ShowLocations, setShowLocation, ShowAddGuests, setShowAddGuests}}>
            { children }
        </ApartmentContext.Provider>
    )
}
