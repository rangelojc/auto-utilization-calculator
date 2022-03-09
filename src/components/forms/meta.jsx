import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment"

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR, FormUnit } from "../components";
import { setYear, setMake, setModel, setPurchaseOdo, setPurchaseDate, setCurrentOdo, setPurchasePrice, setCurrentDate, setMilesTraveled } from '../../store/metaReducer.js'
import HelpTooltip from "../help-tooltip"

const FormWrapper = styled.div`
`

function MetaForm() {
    const dispatch = useDispatch()

    //redux
    const milesTraveled = useSelector(state => state.meta.milesTraveled)
    const currentDate = useSelector(state => state.meta.currentDate)
    const purchaseDate = useSelector(state => state.meta.purchaseDate)

    const distanceUnit = useSelector(state => state.config.distanceUnit)
    const fuelUnit = useSelector(state => state.config.fuelUnit)
    const currency = useSelector(state => state.config.currency)

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
                        <FormLabel>
                            Price Purchased
                            <HelpTooltip dataTip="If your car is a loaner, you can put the total amount paid/to be paid here." />
                        </FormLabel>

                        <FormField className="form-field pos-rel">
                            <FormInput type="number" placeholder="0.00" onChange={v => dispatch(setPurchasePrice(v.target.value))} />
                            <FormUnit>{currency}</FormUnit>
                        </FormField>
                    </FormField>
                </FormRow>
                <FormHR />

                <h4>Current Information</h4>
                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>
                            Current Date of Ownership
                            <HelpTooltip dataTip="If you no longer own the car you can modify this date to the last date of ownership. <br> You can also set a future date to get projected calculations." />
                        </FormLabel>
                        <FormInput type="date" value={currentDate || moment().format("YYYY-MM-DD")} onChange={v => dispatch(setCurrentDate(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel className="with-help">
                            Distance traveled since purchase
                            <HelpTooltip dataTip="Your current odometer reading minus the reading when you purchased the car. <br> If the car was brand new then just put whatever is in your car's odometer. <br> You can also set a reading higher than your current to get projected calculations." />
                        </FormLabel>
                        <FormField className="form-field pos-rel">
                            <FormInput type="number" placeholder={0} onChange={v => dispatch(setMilesTraveled(v.target.value * 1))} />
                            <FormUnit>{distanceUnit}</FormUnit>
                        </FormField>
                    </FormField>
                </FormRow>
                <FormHR />

            </Form>
        </FormWrapper>
    );
}

export default MetaForm;
