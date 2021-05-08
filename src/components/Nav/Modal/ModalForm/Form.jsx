//modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Input from './Input'

//styled components
import {FormContainer, 
    FormGroup, Separator, ButtonSearch, AddCitye, 
    CityeButton, MapIcon, AddGuests, AddGuestsForm, 
    AddGuestsTitle, AddGuestsParagraph, AddGuestsButton, AddGuestCount} 
    from './ModalFormStyles'
import { useContext, useEffect, useState } from 'react'
import { ApartmentContext } from '../../../../Providers/ApartmentsProvider'


const Form = ({setShowModal}) => {
    //context
    const {ShowLocations, setShowLocation} = useContext(ApartmentContext)
    const  {ShowAddGuests, setShowAddGuests} = useContext(ApartmentContext)
    const {Apartments} = useContext(ApartmentContext)

    const {setFilterApartments} = useContext(ApartmentContext)

    //states
    const [Location, setLocation] = useState('')
    const [Guests, setGuests] = useState(0)
    const [Children, setChildren] = useState(0)
    const [Adults, setAdults] = useState(0)


    useEffect(()=> {
        setGuests(Children + Adults)
    }, [Children, Adults])

    const handleOnSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        let dataLocation = data.get('Location').toUpperCase()
        let dataGuests = data.get('Guests')

        console.log(dataLocation);
        console.log(dataGuests);

        //Apartments.map(apartment => console.log(apartment.country.toUpperCase() + " " + apartment.city.toUpperCase()))
        let FilterStays = Apartments.filter(apartment => apartment.city.toUpperCase() + " " + apartment.country.toUpperCase() === dataLocation)
        setFilterApartments(FilterStays)
        setShowModal(false)
    }

    const handleShowCityes = () => {
        if(ShowLocations === false){
            setShowLocation(true)
            setShowAddGuests(false)
        }else{
            setShowLocation(true)
        }
    }

    const handleShowAddGuests = () => {
        if(ShowAddGuests === false){
            setShowAddGuests(true)
            setShowLocation(false)
        }else{
            setShowAddGuests(false)   
        }
    }

    const handleChangeLocation = event => {
        setLocation(event.target.textContent)
    }

    const handleAddChildren = () => {
        setChildren(Children + 1)
    }

    const handleRemoveChildren = () => {
        setChildren(Children - 1)
    }

    const handleAddAdults = () => {
        setAdults(Adults + 1)
    }

    const handleRemoveAdults = () => {
        setAdults(Adults - 1)
    }

    return (
        <FormContainer onSubmit = {handleOnSubmit}>
            <FormGroup>
                <Input 
                    inputPlaceholder = "add location"
                    inputId = "inputLocation"
                    labelText = "LOCATION"
                    inputName = "Location"
                    inputOnFocus = {handleShowCityes}
                    inputValue = {Location}
                />

                <AddCitye ShowLocations = {ShowLocations}>
                    <CityeButton onClick={handleChangeLocation} type = "button">
                        <MapIcon icon = {faMapMarkerAlt}/>
                        Helsinki Finland
                    </CityeButton>

                    <CityeButton onClick={handleChangeLocation} type = "button">
                        <MapIcon icon = {faMapMarkerAlt}/>
                        Turku Finland
                    </CityeButton>

                    <CityeButton onClick={handleChangeLocation} type = "button">
                        <MapIcon icon = {faMapMarkerAlt}/>
                        Oulu Finland
                    </CityeButton>

                    <CityeButton onClick={handleChangeLocation} type = "button">
                        <MapIcon icon = {faMapMarkerAlt}/>
                        Vaasa Finland
                    </CityeButton>
                </AddCitye>
            </FormGroup>

            <Separator/>

            <FormGroup>
                <Input 
                    inputPlaceholder = "add guests"
                    inputId = "inputGuests"
                    labelText = "GUESTS"
                    inputName = "Guests"
                    inputValue = {Guests}
                    inputOnFocus = {handleShowAddGuests}
                />

                <AddGuests ShowAddGuests = {ShowAddGuests}>
                    <AddGuestsForm>
                        <AddGuestsTitle>
                            Adults
                        </AddGuestsTitle>

                        <AddGuestsParagraph>
                            Ages 13 or above
                        </AddGuestsParagraph>

                        <AddGuestsButton onClick = {handleRemoveAdults} type = "button">
                            -
                        </AddGuestsButton>

                        <AddGuestCount>{Adults}</AddGuestCount>

                        <AddGuestsButton onClick = {handleAddAdults} type = "button">
                            +
                        </AddGuestsButton>
                    </AddGuestsForm>

                    <AddGuestsForm>
                        <AddGuestsTitle>
                            Chilren
                        </AddGuestsTitle>

                        <AddGuestsParagraph>
                            Ages 2-12
                        </AddGuestsParagraph>

                        <AddGuestsButton type = "button" onClick = {handleRemoveChildren}>
                            -
                        </AddGuestsButton>

                        <AddGuestCount>{Children}</AddGuestCount>

                        <AddGuestsButton type = "button" onClick = {handleAddChildren}>
                            +
                        </AddGuestsButton>
                    </AddGuestsForm>
                </AddGuests>
            </FormGroup>

            <Separator/>

            <FormGroup>
                <ButtonSearch type = "submit">
                    <FontAwesomeIcon icon = {faSearch}/>
                    Search
                </ButtonSearch>
            </FormGroup>
        </FormContainer>
    )
}

export default Form