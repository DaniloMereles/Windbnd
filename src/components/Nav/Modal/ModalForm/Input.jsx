import {InputElement, LabelElement, InputContainer} from './ModalFormStyles' 

const Input = ({inputPlaceholder, inputId, labelText, inputOnFocus, inputValue, inputName}) => {
    return(
        <InputContainer>
            <LabelElement htmlFor={inputId}>
                {labelText}
            </LabelElement>
            
            <InputElement 
                placeholder = {inputPlaceholder}
                id = {inputId}
                onFocus = {inputOnFocus}
                value = {inputValue}
                name = {inputName}
            />
        </InputContainer>
    )
}

export default Input