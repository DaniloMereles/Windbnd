import styled from 'styled-components'

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

export {FormContainer, FormGroup, Separator, InputElement, LabelElement, InputContainer, ButtonSearch}