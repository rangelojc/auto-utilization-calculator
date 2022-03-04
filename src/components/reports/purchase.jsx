import styled from 'styled-components';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';

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

function BasicReport() {

    const [perMileageCost, setPerMileageCost] = useState(0);

    //redux
    const purchasePrice = useSelector(state => state.meta.purchasePrice)
    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)

    //effect
    useEffect(() => {
        const output = purchasePrice / milesTraveled;
        if (!isNaN(output)) setPerMileageCost(output.toFixed(2));
    }, [purchasePrice, milesTraveled]);

    //functions


    return (
        <Wrapper>
            <Form>
                <h4>Purchase Utilization</h4>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Total Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={numberWithCommas(purchasePrice)} />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Daily Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value="0" />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Monthly Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value="0" />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField className="form-field label-only">
                        <FormLabel>Per Mileage Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={perMileageCost} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default BasicReport;
