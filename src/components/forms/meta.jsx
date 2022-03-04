import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment"

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR } from "../components";

import { setYear, setMake, setModel, setPurchaseOdo, setPurchaseDate, setCurrentOdo, setPurchasePrice, setCurrentDate } from '../../store/metaReducer.js'

const FormWrapper = styled.div`
    width: 80%;
`

function MetaForm() {
    const dispatch = useDispatch()

    //redux
    const milesTraveled = useSelector(state => state.meta.milesTraveled)
    const currentDate = useSelector(state => state.meta.currentDate)
    const purchaseDate = useSelector(state => state.meta.purchaseDate)

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
                        <FormInput type="text" placeholder="" onChange={v => dispatch(setMake(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Model</FormLabel>
                        <FormInput type="text" placeholder="" onChange={v => dispatch(setModel(v.target.value))} />
                    </FormField>
                </FormRow>
                <FormHR />

                <h4>Purchase Information</h4>
                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Purchase Date</FormLabel>
                        <FormInput type="date" onChange={v => dispatch(setPurchaseDate(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Odometer Reading</FormLabel>
                        <FormInput type="number" placeholder="0" onChange={v => dispatch(setPurchaseOdo(v.target.value))} />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Price Purchased</FormLabel>
                        <FormInput type="number" placeholder="0.00" onChange={v => dispatch(setPurchasePrice(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                    </FormField>
                </FormRow>
                <FormHR />

                <h4>Current Information</h4>
                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Current Date of Ownership</FormLabel>
                        <FormInput type="date" value={currentDate || moment().format("YYYY-MM-DD")} onChange={v => dispatch(setCurrentDate(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Current Odometer Reading</FormLabel>
                        <FormInput type="number" placeholder={0} onChange={v => dispatch(setCurrentOdo(v.target.value))} />
                    </FormField>
                </FormRow>
                <FormHR />

            </Form>
        </FormWrapper>
    );
}

export default MetaForm;
