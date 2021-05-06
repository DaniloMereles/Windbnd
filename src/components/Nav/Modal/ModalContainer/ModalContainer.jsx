import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


import { Modal, ModalInfo, ModalTitle, CloseModalButton } from "./ModalContainerStyles"

import Form from '../ModalForm/Form'

const ModalContainer = ({ShowModal, setShowModal}) => {
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <Modal ShowModal = {ShowModal} setShowModal = {ShowModal}>
            <ModalInfo>
                <ModalTitle>
                    Search your stay
                </ModalTitle>

                <CloseModalButton onClick = {handleCloseModal}>
                    <FontAwesomeIcon icon={faTimes}/>
                </CloseModalButton>
            </ModalInfo>

            <Form/>

        </Modal>

    )
}

export default ModalContainer