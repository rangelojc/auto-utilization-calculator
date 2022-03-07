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

    const [daysOwned, setDaysOwned] = useState(0);
    const [monthsOwned, setMonthsOwned] = useState(0);


    //redux
    const purchasePrice = useSelector(state => state.meta.purchasePrice)
    const purchaseDate = useSelector(state => state.meta.purchaseDate)
    const currentDate = useSelector(state => state.meta.currentDate)
    const milesTraveled = useSelector(state => state.meta.milesTraveled)

    const carInfo = useSelector(state => {
        if (!state.meta.year || !state.meta.make || !state.meta.model) return "";
        else return `${state.meta.year} ${state.meta.make} ${state.meta.model}`
    })

    const distanceUnit = useSelector(state => state.config.distanceUnit)

    //effect
    useEffect(() => {
        const a = moment(purchaseDate);
        const b = currentDate ? moment(currentDate) : moment();
        const dailyDiff = b.diff(a, 'days');
        const monthlyDiff = b.diff(a, 'months');

        if (!isNaN(dailyDiff)) setDaysOwned(dailyDiff);
        if (!isNaN(monthlyDiff)) setMonthsOwned(monthlyDiff);


    }, [purchasePrice, purchaseDate, currentDate]);


    //functions
    return (
        <Wrapper>
            <Form>
                <h4>{carInfo ? carInfo : "Basic Report "}</h4>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel># of days owned</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={daysOwned} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel># of months owned</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={monthsOwned} />
                    </FormField>
                </FormRow>
                <FormRow className="form-row">
                    <FormField className="form-field label-only">
                        <FormLabel>Distance traveled since purchase</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={numberWithCommas(milesTraveled) + " " + distanceUnit} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default BasicReport;
