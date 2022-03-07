import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR, FormUnit } from "../components";

import { setCostPer, setConsumption } from '../../store/fuelReducer.js'

const FormWrapper = styled.div`
`

function FuelForm() {
    const dispatch = useDispatch()

    //redux
    const distanceUnit = useSelector(state => state.config.distanceUnit)
    const fuelUnit = useSelector(state => state.config.fuelUnit)

    return (
        <FormWrapper>
            <Form>
                <h4>Fuel Estimation</h4>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Est. Fuel Consumption</FormLabel>
                        <FormField className="form-field pos-rel">
                            <FormInput type="number" placeholder="0" onChange={v => dispatch(setConsumption(v.target.value))} />
                            <FormUnit>{`${distanceUnit}/${fuelUnit}`}</FormUnit>
                        </FormField>
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Est. Fuel Cost</FormLabel>
                        <FormField className="form-field pos-rel">
                            <FormInput type="number" placeholder="0" onChange={v => dispatch(setConsumption(v.target.value))} />
                            <FormUnit>{"/" + fuelUnit}</FormUnit>
                        </FormField>
                    </FormField>
                </FormRow>
            </Form>
        </FormWrapper>
    );
}

export default FuelForm;
