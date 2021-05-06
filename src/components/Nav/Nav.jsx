//components
import Separator from "../Separator/Separator"

//styled components
import { ButtonOpenModal, NavContainer, NavHeader, SearchButton, Addguests } from "./NavStyles"

//modules
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ModalContainer from "./Modal/ModalContainer/ModalContainer"
import { useState } from "react"


const Nav = () => {
    const [ShowModal, setShowModal] = useState(false)
    
    const handleShowModal = () => {
        setShowModal(true)
    }

    return(
        <NavHeader>
            <NavContainer>
                <img src="https://i.imgur.com/oPGouoD.png" alt="windbnd logo"/>

                <ButtonOpenModal onClick = {handleShowModal}>
                    Helsinki, Finland

                    <Separator/>

                    <Addguests>Add guests</Addguests>

                    <Separator/>

                    <SearchButton icon={faSearch}/>
                </ButtonOpenModal>
            </NavContainer>

            <ModalContainer ShowModal = {ShowModal} setShowModal = {setShowModal}/>
        </NavHeader>
    )
}

export default Nav