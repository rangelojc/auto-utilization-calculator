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

    .form-row{
        margin: 0;
    }
`

function SummaryReport() {

    //redux
    const estCostPer = useSelector(state => state.fuel.estCostPer)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)
    const purchasePrice = useSelector(state => state.meta.purchasePrice)

    const currency = useSelector(state => state.config.currency)

    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Summary</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Total Cost and Expenses:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(((estCostPer * milesTraveled) + purchasePrice).toFixed(2))} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default SummaryReport;
