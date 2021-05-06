//modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Input from './Input'

//styled components
import {FormContainer, FormGroup, Separator, ButtonSearch} from './ModalFormStyles'

const Form = () => {
    return (
        <FormContainer>
            <FormGroup>
                <Input 
                    inputPlaceholder = "add location"
                    inputId = "inputLocation"
                    labelText = "LOCATION"
                />
            </FormGroup>

            <Separator/>

            <FormGroup>
                <Input 
                    inputPlaceholder = "add guests"
                    inputId = "inputGuests"
                    labelText = "GUESTS"
                />
            </FormGroup>

            <Separator/>

            <FormGroup>
                <ButtonSearch>
                    <FontAwesomeIcon icon = {faSearch}/>
                    Search
                </ButtonSearch>
            </FormGroup>
        </FormContainer>
    )
}

export default Form