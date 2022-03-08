import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react"
import { numberWithCommas } from "../../utils/utils.js"
import moment from "moment";

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
    const [grandTotal, setGrandTotal] = useState(0)
    const [monthlyCost, setMonthlyCost] = useState(0);

    //redux
    const estCostPer = useSelector(state => state.fuel.estCostPer)

    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)
    const purchasePrice = useSelector(state => state.meta.purchasePrice)

    const insuranceLegalExpenses = useSelector(state => state.itemizedExpenses.insuranceLegalExpenses)
    const serviceExpenses = useSelector(state => state.itemizedExpenses.serviceExpenses)

    const currency = useSelector(state => state.config.currency)

    useEffect(() => {
        setGrandTotal(
            (
                ((estCostPer * milesTraveled) || 0)
                + (purchasePrice || 0)
                + (insuranceLegalExpenses || 0)
                + (serviceExpenses || 0)
            ).toFixed(2)
        )
    }, [estCostPer, milesTraveled, purchasePrice, insuranceLegalExpenses, serviceExpenses]);

    useEffect(() => {
        const a = moment(purchaseDate);
        const b = currentDate ? moment(currentDate) : moment();
        const monthlyDiff = b.diff(a, 'months');

        if (!isNaN(monthlyDiff) && grandTotal) {
            const output = grandTotal / monthlyDiff;
            if (!isNaN(output)) setMonthlyCost(output.toFixed(2));
        }
    }, [grandTotal, purchaseDate, currentDate])


    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Summary</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Total Monthly Cost:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(monthlyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Grand Total:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(grandTotal)} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default SummaryReport;
