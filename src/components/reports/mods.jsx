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
        font-size: 1.2em;
    }

    .form-row{
        margin: 0;
    }
`

function ModsReport() {

    //redux
    const [yearlyCost, setYearlyCost] = useState(0);
    const [monthlyCost, setMonthlyCost] = useState(0);

    //redux
    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)

    const currency = useSelector(state => state.config.currency)

    const modsExpenses = useSelector(state => state.itemizedExpenses.modsExpenses)


    //effect
    useEffect(() => {
        const a = moment(purchaseDate);
        const b = currentDate ? moment(currentDate) : moment();
        const yearlyDiff = b.diff(a, 'years', true);
        const monthlyDiff = b.diff(a, 'months');

        if (!isNaN(yearlyDiff) && modsExpenses !== null) {
            const output = modsExpenses / yearlyDiff;
            if (!isNaN(output)) setYearlyCost(output.toFixed(2));
        }

        if (!isNaN(monthlyDiff) && modsExpenses !== null) {
            const output = modsExpenses / monthlyDiff;
            if (!isNaN(output)) setMonthlyCost(output.toFixed(2));
        }

    }, [modsExpenses, purchaseDate, currentDate]);

    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Mods and Accessories Costs</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Monthly Utilization:</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(monthlyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Yearly Utilization:</FormLabel>
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
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(modsExpenses.toFixed(2))} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default ModsReport;
