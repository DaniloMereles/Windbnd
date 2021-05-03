//modules
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NavContainer = styled.div `
    width: 90%;
    height: 100%; 
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 577px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const NavHeader = styled.nav `
    width: 100%;
    height: 90px;
    margin-bottom: 35px;
    position: relative;
    @media(max-width: 577px) {
        height: 120px;
        padding-top: 22px;
    }
`

const ButtonOpenModal = styled.button `
    width: 297px;
    height: 55px;
    border: none;
    outline: none;
    background-color: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 16px;
    cursor: pointer;    
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    @media(max-width: 577px) {
        cursor: initial;
    }
`

const Addguests = styled.span `
    color: #BDBDBD;
`

const SearchButton = styled(FontAwesomeIcon) `
    color: #EB5757;
`

export {NavContainer, NavHeader, ButtonOpenModal,Addguests, SearchButton}