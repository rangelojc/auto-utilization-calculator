import styled from 'styled-components';
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
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

function BasicReport() {

    const [perMileageCost, setPerMileageCost] = useState(0);
    const [dailyCost, setDailyCost] = useState(0);
    const [monthlyCost, setMonthlyCost] = useState(0);

    //redux
    const purchasePrice = useSelector(state => state.meta.purchasePrice)
    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)

    const currency = useSelector(state => state.config.currency)
    const distanceUnit = useSelector(state => state.config.distanceUnit)
    const fuelUnit = useSelector(state => state.config.fuelUnit)

    //effect
    useEffect(() => {
        const output = purchasePrice / milesTraveled;
        if (!isNaN(output) && isFinite(output)) setPerMileageCost(output.toFixed(2));
    }, [purchasePrice, milesTraveled]);

    useEffect(() => {
        const a = moment(purchaseDate);
        const b = currentDate ? moment(currentDate) : moment();
        const dailyDiff = b.diff(a, 'days');
        const monthlyDiff = b.diff(a, 'months');

        if (!isNaN(dailyDiff) && purchasePrice) {
            const output = purchasePrice / dailyDiff;
            if (!isNaN(output)) setDailyCost(output.toFixed(2));
        }

        if (!isNaN(monthlyDiff) && purchasePrice) {
            const output = purchasePrice / monthlyDiff;
            if (!isNaN(output)) setMonthlyCost(output.toFixed(2));
        }

    }, [purchasePrice, purchaseDate, currentDate]);

    //functions


    return (
        <Wrapper>
            <Form>
                <h4>Purchase Utilization</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Daily Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(dailyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Monthly Cost</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + numberWithCommas(monthlyCost)} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Cost Per Distance</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={currency + " " + perMileageCost + ` /${distanceUnit}`} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Total Cost As Purchased</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={numberWithCommas(purchasePrice)} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default BasicReport;
