//modules
import { faStar } from '@fortawesome/free-solid-svg-icons'

//styled components
import {ApartmentType, Stay, StayBg, StayValuation, SuperHostButton, ApartmentStars, StarIcon, ApartmentTitle} from './StayCardStyles'

const StayCard = () => {
    return(
        <Stay>
            <StayBg src="https://i.imgur.com/SFmpfEY.jpg"/>

            <StayValuation>
                <SuperHostButton>Super Host</SuperHostButton>
                <ApartmentType>Entire apartment . 2 beds</ApartmentType>
                <ApartmentStars>
                    <StarIcon icon={faStar}/>4.40
                </ApartmentStars>
            </StayValuation>

            <ApartmentTitle>
                Stylist apartment in center of the city
            </ApartmentTitle>
        </Stay>

    )
}

export default StayCard