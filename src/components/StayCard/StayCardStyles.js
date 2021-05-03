//modules
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stay = styled.article  `
    width: 395px;
    height: 410px;
    margin: 10px;
`

const StayBg = styled.img `
    width: 100%;
    height: 269px;
    border-radius: 24px;
`

const StayValuation = styled.div `
    width: 100%;
    height: 35px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SuperHostButton = styled.button `
    background-color: transparent;
    outline: none;
    width: 100px;
    height: 28px;
    border-radius: 12px;
    border: 1px solid #4F4F4F;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px; 
    font-weight: 700;
    text-transform: uppercase;
    color: #4F4F4F;
`

const ApartmentType = styled.p `
    color: #828282;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`

const ApartmentStars = styled.p `
    color: #4F4F4F;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
`

const StarIcon = styled(FontAwesomeIcon) `
    color: #EB5757;
`

const ApartmentTitle = styled.h2 `
    color: #333333;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-top: 17px;
`

export {Stay, StayBg, StayValuation, SuperHostButton, ApartmentType, ApartmentStars, StarIcon, ApartmentTitle}