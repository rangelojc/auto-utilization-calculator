import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR } from "../components";

import { setCostPer, setConsumption } from '../../store/fuelReducer.js'

const FormWrapper = styled.div`
    width: 80%;
`

function FuelForm() {
    const dispatch = useDispatch()

    //redux
    const estCostPer = useSelector(state => state.fuel.estCostPer)
    const total = useSelector(state => state.fuel.total)

    return (
        <FormWrapper>
            <Form>
                <h4>Fuel Estimation</h4>

                <FormRow>
                    <FormField className="form-field">
                        <FormLabel>Est. Fuel Consumption (km/L)</FormLabel>
                        <FormInput type="number" placeholder="0" onChange={v => dispatch(setConsumption(v.target.value))} />
                    </FormField>
                    <FormField className="form-field">
                        <FormLabel>Est. Fuel Cost per L</FormLabel>
                        <FormInput type="number" placeholder="0" onChange={v => dispatch(setCostPer(v.target.value))} />
                    </FormField>
                </FormRow>
            </Form>
        </FormWrapper>
    );
}

export default FuelForm;
