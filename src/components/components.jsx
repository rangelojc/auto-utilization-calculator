import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

//Layout
export const Wrapper = styled.div`
    height: inherit;
    max-width: 1180px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`;

export const Section = styled.section`
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

// Form
export const Form = styled.div`

`;

export const FormGroup = styled.div`

`;

export const FormField = styled.div`
    flex: 1 1 auto;
    width: 100%;
    min-width: 90px;

    &.label-only{
        display: flex;
        align-items: center;
    }

    &.xs{
        max-width: 170px;
    }
`;

export const FormRow = styled(Row)`
    justify-content: space-between;
    margin-bottom: 10px;

    .form-field {
        margin-right: 16px;

        &:last-child {
            margin-right: 0px;
        }
    }
`;

export const FormError = styled.span`
    position: relative;
    top: 5px;
    display: block;
    color: red;
    text-align: right;
    width: 100%;
    height: 20px;
    font-size: 11px;
`;

export const FormLabel = styled.label`
    /* font-weight: 500; */
    vertical-align: middle;

    display: flex;
    margin-bottom: 5px;
`;

export const FormInput = styled.input`
    height: 40px;
    width: 100%;
    background-color: #eeeeee;
    border: none;
    border-radius: 5px;
    outline: 0px;
    padding: 0 12px;
    font-size: 1.1em;

    font-weight: 500;
    transition: background-color 0.2s ease-in-out;

    &::placeholder {
        color: #414E54;
    }

    &:focus {
        background-color: #e0e0e0;
    }

    &[disabled]{
        opacity: 0.3;
        cursor: initial;
    }

    &[readOnly]{
        pointer-events: none;
        background: none;
        padding: 0;
    }
`;


export const FormTextArea = styled.textarea`
    width: 100%;
    background-color: #222426;
    border: 1px solid #414E54;
    outline: 0px;
    padding: 12px;

    font-weight: 500;
    transition: background-color 0.2s ease-in-out;
    min-height: 70px;

    &::placeholder {
        color: #414E54;
    }

    &:focus {
        background-color: var(--black);
    }
`;


export const FormSelect = styled.select`
    height: 36px;
    width: 100%;
    background-color: #222426;
    border: 1px solid #414E54;
    outline: 0px;
    padding: 0 12px;

    font-weight: 500;
    transition: background-color 0.2s ease-in-out;

    &::placeholder {
        color: #414E54;
    }

    &:focus {
        background-color: var(--black);
    }
`;

export const FormUnit = styled.span`
    position: absolute;
    right: 10px;
    top: 12px;
    user-select: none;
`

export const FormHR = styled.div`
    width: 100%;
    border-bottom: 1px solid #9b9b9b;
    margin: 20px 0px;
`

export const FormAddEntry = styled.button`
    height: 30px;
    width: 40px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    background: #9c44ac;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    img{
        height: 30px;
        width: 30px;
    }
`