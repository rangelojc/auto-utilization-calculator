import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react"

import moment from "moment";

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

function ServiceReport() {

    //redux
    const [yearlyCost, setYearlyCost] = useState(0);
    const [monthlyCost, setMonthlyCost] = useState(0);

    //redux
    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)

    const currency = useSelector(state => state.config.currency)

    const insuranceLegalExpenses = useSelector(state => state.itemizedExpenses.insuranceLegalExpenses)


    //effect
    useEffect(() => {
        const a = moment(purchaseDate);
        const b = currentDate ? moment(currentDate) : moment();
        const yearlyDiff = b.diff(a, 'years', true);
        const monthlyDiff = b.diff(a, 'months');

        if (!isNaN(yearlyDiff) && insuranceLegalExpenses) {
            const output = insuranceLegalExpenses / yearlyDiff;
            if (!isNaN(output)) setYearlyCost(output.toFixed(2));
        }

        if (!isNaN(monthlyDiff) && insuranceLegalExpenses) {
            const output = insuranceLegalExpenses / monthlyDiff;
            if (!isNaN(output)) setMonthlyCost(output.toFixed(2));
        }

    }, [insuranceLegalExpenses, purchaseDate, currentDate]);

    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Insurance / Legal Costs</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Monthly Cost:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(monthlyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Yearly Cost:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(yearlyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Total Cost:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(insuranceLegalExpenses.toFixed(2))} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default ServiceReport;
