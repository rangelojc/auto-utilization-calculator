import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR } from "./components";

import { setYear, setMake, setModel, setPurchaseOdo, setCurrentOdo, setPurchasePrice } from '../store/metaReducer.js'

const FormWrapper = styled.div`
    width: 80%;
`

function MetaForm() {
    const dispatch = useDispatch()

    //redux
    const milesTraveled = useSelector(state => state.meta.milesTraveled)

    return (
        <FormWrapper>
            <Form>
                <h4>Basic Information</h4>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Year</FormLabel>
                        <FormInput type="number" placeholder="" onChange={v => dispatch(setYear(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Make</FormLabel>
                        <FormInput placeholder="" onChange={v => dispatch(setMake(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Model</FormLabel>
                        <FormInput placeholder="" onChange={v => dispatch(setModel(v.target.value))} />
                    </FormField>
                </FormRow>

                <FormHR />
                <h4>Purchase Information</h4>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Purchase Date</FormLabel>
                        <FormInput placeholder="YYYY/MM/DD" />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Odometer Reading</FormLabel>
                        <FormInput placeholder="0" onChange={v => dispatch(setPurchaseOdo(v.target.value))} />
                    </FormField>
                </FormRow>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Price Purchased</FormLabel>
                        <FormInput placeholder="0.00" onChange={v => dispatch(setPurchasePrice(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                    </FormField>
                </FormRow>

                <FormHR />
                <h4>Current Information</h4>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Current Date of Ownership</FormLabel>
                        <FormInput placeholder="YYYY/MM/DD" />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Current Odometer Reading</FormLabel>
                        <FormInput type="number" placeholder={0} onChange={v => dispatch(setCurrentOdo(v.target.value))} />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Miles traveled since purchase</FormLabel>
                        <FormInput readOnly value={milesTraveled} />
                    </FormField>
                    <FormField className="form-field"></FormField>
                </FormRow>
            </Form>
        </FormWrapper>
    );
}

export default MetaForm;
