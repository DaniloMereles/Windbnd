//modules
import { faStar } from '@fortawesome/free-solid-svg-icons'

//styled components
import {ApartmentType, Stay, StayBg, StayValuation, SuperHostButton, ApartmentStars, StarIcon, ApartmentTitle} from './StayCardStyles'

const StayCard = ({stayBg, superHost, stayType, stayBeds, stayRating, stayTitle}) => {
    return(
        <Stay>
            <StayBg src={stayBg}/>

            <StayValuation>
                {superHost === true ? <SuperHostButton>Super Host</SuperHostButton>: ''}

                <ApartmentType>{stayType}. {stayBeds} beds</ApartmentType>

                <ApartmentStars>
                    <StarIcon icon={faStar}/>{stayRating}
                </ApartmentStars>

            </StayValuation>

            <ApartmentTitle>
                {stayTitle}
            </ApartmentTitle>
        </Stay>

    )
}

export default StayCard