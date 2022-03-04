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

    const carInfo = useSelector(state => {
        if (!state.meta.year || !state.meta.make || !state.meta.model) return "";
        else return `${state.meta.year} ${state.meta.make} ${state.meta.model}`
    })

    //effect

    //functions
    return (
        <Wrapper>
            <Form>
                <h4>Basic Report {carInfo ? "- " + carInfo : ""}</h4>
                < FormRow >
                    <FormField className="form-field label-only">
                        <FormLabel>Miles traveled since purchase</FormLabel>
                    </FormField>
                    <FormField className="form-field">
                        <FormInput className="result-field align-right" readOnly value={numberWithCommas(milesTraveled)} />
                    </FormField>
                </FormRow>
            </Form>
        </Wrapper>
    );
}

export default BasicReport;
