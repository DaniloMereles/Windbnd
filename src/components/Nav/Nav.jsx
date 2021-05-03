//components
import Separator from "../Separator/Separator"
import {ModalContainer} from './ModalFiles/Modal/Modal'

//styled components
import { ButtonOpenModal, NavContainer, NavHeader, SearchButton, Addguests } from "./NavStyles"

import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
    return(
        <NavHeader>
            <NavContainer>
                <img src="https://i.imgur.com/oPGouoD.png" alt="windbnd logo"/>

                <ButtonOpenModal>
                    Helsinki, Finland

                    <Separator/>

                    <Addguests>Add guests</Addguests>

                    <Separator/>

                    <SearchButton icon={faSearch}/>
                </ButtonOpenModal>
            </NavContainer>
        </NavHeader>
    )
}

export default Nav