import {createContext, useState, useEffect} from 'react'

export const ApartmentContext = createContext()

export const ApartmentProvider = ({children}) => {
    const [Apartments, setAparments] = useState([])

    useEffect(()=>{
        fetch('https://api.jsonbin.io/b/60903da8d64cd16802a89231')
        .then(response => response.json())
        .then(response => {
            setAparments(response)
        })
        .catch(() => {
            console.log('error')
        })
    }, [])

    return (
        <ApartmentContext.Provider value = {{Apartments, setAparments}}>
            { children }
        </ApartmentContext.Provider>
    )
}
