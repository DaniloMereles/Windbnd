import {InputElement, LabelElement, InputContainer} from './ModalFormStyles' 

const Input = ({inputPlaceholder, inputId, labelText}) => {
    return(
        <InputContainer>
            <LabelElement htmlFor={inputId}>
                {labelText}
            </LabelElement>
            
            <InputElement 
                placeholder = {inputPlaceholder}
                id = {inputId}
            />
        </InputContainer>
    )
}

export default Input