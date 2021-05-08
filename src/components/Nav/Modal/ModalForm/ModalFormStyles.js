import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FormContainer = styled.form `
    width: 90%;
    height: 55px;
    background-color: #ffff;
    border-radius: 16px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    margin: 15px auto;
    display: flex;
    @media(max-width: 575px){
        flex-direction: column;
        height: 180px;
    }
`

const FormGroup = styled.div `
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 575px){
        width: 100%;
        height: 33%;
    }
`

const Separator = styled.div `
    width: 1px;
    height: 100%;
    background-color: #F2F2F2;
`

const InputContainer = styled.div `
    width: 100%;
    height: 100%;
    position: relative;
`

const InputElement = styled.input `
    width: 100%;
    height: 55px;
    border-radius: 16px;
    border: none;
    outline: none;
    padding-left: 27px;
    padding-top: 15px;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    &:placeholder{
        color: #BDBDBD;
    }

    &:focus{
        border: 1px solid #333333;
    }

`

const LabelElement = styled.label `
    position: absolute;
    font-family: 'Mulish', sans-serif;
    font-size: 9px;
    font-weight: 800;
    line-height: 11px;
    left: 27px;
    top: 12px;
`

const AddCitye = styled.div `
    position: absolute;
    top: 140px;
    left: 100px;
    width: 145px;
    height: 200px;
    display: ${props => props.ShowLocations === true ? 'flex' : 'none'};
    justify-content: space-around;
    flex-direction: column;

    @media(max-width: 575px){
        top: 280px;
        width: 90%;
        left: 0px;
        right: 0px;
        margin: auto;
    }
`

const CityeButton = styled.button `
    background-color: transparent;
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    line-height: 14px;
    border: none;
    outline: none;
    color: #4F4F4F;
    cursor: pointer;
    &:hover{
        color: #EB5757;
    }
`

const MapIcon = styled(FontAwesomeIcon) `
    margin-right: 10px;
`
 
const AddGuests = styled.div `
    display: ${props => props.ShowAddGuests === true ? 'block' : 'none'};
    width: 120px;
    height: 200px;
    position: absolute;
    top: 140px;
    left: 500px;
    font-family: 'Mulish', sans-serif;
    font-weight: 400; 
    font-size: 14px;
    line-height: 17px;
    @media(max-width: 575px){
        width: 80%;
        height: 300px;
        position: absolute;
        top: 200px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    }
`

const AddGuestsForm = styled.div `
    margin-bottom: 52px;
`

const AddGuestsTitle = styled.h3 `
    font-weight: 700;
`

const AddGuestsParagraph = styled.p `
    color: #828282;
    margin-bottom: 12px;
`

const AddGuestsButton = styled.button `
    width: 23px;
    height: 23px;
    border: 1px solid #828282;
    border-radius: 4px;
    outline: none;
    background-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

const AddGuestCount = styled.span `
    margin: 10px;
`

const ButtonSearch = styled.button `
    width: 127px;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 16px;
    background-color: #EB5757;
    color: #fff;
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media(max-width: 575px){
        height: 40px;
        margin-bottom: 10px;
    }
`


export {FormContainer, FormGroup, Separator, InputElement, LabelElement, 
    InputContainer, ButtonSearch, AddCitye, CityeButton, MapIcon, AddGuests, 
    AddGuestsForm, AddGuestsTitle, AddGuestsParagraph, AddGuestsButton, AddGuestCount}