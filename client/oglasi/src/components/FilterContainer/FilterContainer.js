import React from 'react'
import { Container, FormContainer, SelectBox, PriceInput, PriceBox, Checkbox, CheckboxContainer, SubmitButton } from './style/FilterContainer';


function FilterContainer ({children, ...restProps}) {
    return (
        <div {...restProps}>{children}</div>
    )
}

FilterContainer.Container = function ({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
}

FilterContainer.FormContainer = function FilterContainerFormContainer ({children, ...restProps}) {
    return <FormContainer {...restProps}>{ children }</FormContainer>
}

FilterContainer.SelectBox = function FilterContainerSelectBox ({ children, ...restProps }) {
    return <SelectBox {...restProps}>{ children }</SelectBox>
}

FilterContainer.PriceInput = function FilterContainerPriceInput ({ ...restProps }) {
    return <PriceInput {...restProps}/>
}

FilterContainer.PriceBox = function FilterContainerPriceBox ({ children, ...restProps }) {
    return <PriceBox {...restProps}>{ children }</PriceBox>
}

FilterContainer.Checkbox = function FilterContainerCheckbox ({ children, ...restProps }) {
    return <div><label>{ children }</label><Checkbox {...restProps} /></div>
}

FilterContainer.CheckboxContainer = function FilterContainerCheckboxContainer ({ children, ...restProps }) {
    return <CheckboxContainer {...restProps}>{ children }</CheckboxContainer>
}

FilterContainer.SubmitButton = function FilterContainerSubmitButton ({ children, ...restProps }) {
    return <SubmitButton {...restProps}>{ children }</SubmitButton>
}







export default FilterContainer;