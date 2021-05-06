import styled from 'styled-components'

const Modal = styled.div `
    width: 100%;
    height: 460px;
    padding-top: 15px;
    background-color: #FFFFFF;
    position: absolute;
    top: 0px;
    transform: ${props => (props.ShowModal === true ? "translateY(0%)"  : "translateY(-200%)")};
    transition: transform .20s ease-in;

    @media(max-width: 575px){
        height: 632px;    
    }
`

const ModalInfo = styled.div `
    width: 100%;
    height: 33px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const ModalTitle = styled.h3 `
    color: 15px; 
    font-family: 'Mulish', sans-serif;
    font-weight: 700;
    line-height: 15px;
`

const CloseModalButton = styled.button `
    border: none; 
    outline: none;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;

    @media (max-width: 577px){
        cursor: initial;
    }
`

export {Modal, ModalInfo, ModalTitle, CloseModalButton}