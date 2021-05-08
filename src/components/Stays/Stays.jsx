import { useContext } from "react"
import { ApartmentContext } from "../../Providers/ApartmentsProvider"
import { StaysContainer, StayTitle } from "./StaysStyles"

import {Suspense, lazy} from 'react'

const StayCard = lazy(()=> import("../StayCard/StayCard"))

const Stays = () => {
    //const {Apartments} = useContext(ApartmentContext)
    const {FilterApartments} = useContext(ApartmentContext)
    return (
        <section>
            <StayTitle>Stays</StayTitle>
            <StaysContainer>
                {
                    FilterApartments.map(apartment => {
                        return(
                            <Suspense fallback="loading..">
                                <StayCard
                                    stayTitle = {apartment.title}
                                    stayBg = {apartment.photo}
                                    superHost = {apartment.superHost}
                                    stayType = {apartment.type}
                                    stayRating = {apartment.rating}
                                    key = {apartment.title}
                                    stayBeds = {apartment.beds}
                                />
                            </Suspense>
                        )
                    })
                }
            </StaysContainer>
        </section>
    )
}

export default Stays