import styled from 'styled-components'

const StaysContainer = styled.div `
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    @media(max-width: 575px){
        grid-template-columns: 1fr;
    }

`

const StayTitle = styled.h2 `
    width: 90%;
    margin: 10px auto;
`

export {StaysContainer, StayTitle}