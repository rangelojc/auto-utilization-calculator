import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { numberWithCommas } from "../../utils/utils.js"

import { Form, FormField, FormRow, FormInput, FormLabel } from "../components";

const Wrapper = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 0px;
    padding: 1px 20px 10px;

    .result-field{
        font-size: 16px;
    }
`

function FuelReport() {

    //redux
    const estCostPer = useSelector(state => state.fuel.estCostPer)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)

    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Fuel Utilization</h4>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Estimated Fuel Cost per km</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={estCostPer.toFixed(2)} />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Total Fuel Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={numberWithCommas((estCostPer * milesTraveled).toFixed(2))} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default FuelReport;
