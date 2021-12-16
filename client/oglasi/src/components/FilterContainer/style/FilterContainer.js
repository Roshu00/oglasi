import styled from "styled-components/macro";



export const Container = styled.div`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    padding: 30px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    height: ${({active}) => active ? '100vh' : 0};
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-bottom: 10px;

    ::before {
        content: '${({formTitle}) => formTitle}:';
        margin: 2px;
    }
`

export const SelectBox = styled.select`
    width: 200px;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`

export const PriceBox = styled.div`
    display: flex;
    padding: 20px;
`

export const PriceInput = styled.input`
    display: flex;
    margin: 10px;
    width: 100px;
    height: 20px;
    flex-direction: row;
`

export const CheckboxContainer = styled.div`
    display: flex;
    width: 200px;
    margin: 20px 10px;
    justify-content: space-around;
`

export const Checkbox = styled.input`
    display: flex;
    height: 25px;
    width: 25px;
    background-color: #eee;

    :hover{
        background-color: #2196F3;
    }

`

export const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
`