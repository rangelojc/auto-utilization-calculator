import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR, FormUnit, FormAddEntry } from "../components";

import { setServiceExp } from '../../store/itemizedExpensesReducer.js'

const FormWrapper = styled.div`
`

const Entry = ({ data, update }) => {
    const currency = useSelector(state => state.config.currency);

    return (
        <FormRow>
            <FormField className="form-field">
                <FormLabel>Date</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="date" placeholder="" onChange={(v) => update(data.id, "date", v.target.value)} />
                </FormField>
            </FormField>
            <FormField className="form-field">
                <FormLabel>Item Name</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="text" placeholder="" onChange={(v) => update(data.id, "name", v.target.value)} />
                </FormField>
            </FormField>
            <FormField className="form-field">
                <FormLabel>Cost</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="number" placeholder="0" onChange={(v) => update(data.id, "cost", v.target.value * 1)} />
                    <FormUnit>{currency}</FormUnit>
                </FormField>
            </FormField>
        </FormRow >
    )
}

function ServiceForm() {
    const dispatch = useDispatch();

    const [entries, setEntries] = useState([]);

    //redux

    //effect
    useEffect(() => {
        const totalCosts = entries.reduce((a, b) => a + b.cost, 0);
        dispatch(setServiceExp(totalCosts));
    }, [entries])

    //functions
    const addEntry = () => {
        setEntries(a => [...a, { id: entries.length }])
    }

    const updateEntry = (id, key, value) => {
        setEntries((a) => {
            const b = [...a];
            const idx = b.findIndex(i => i.id === id);
            b[idx][key] = value;
            return b;
        });

    }

    //sub render
    const entriesJsx = entries.map(e => {
        return (
            <Entry key={e.id} data={e} update={updateEntry} />
        )
    })

    return (
        <FormWrapper>
            <Form>
                <h4>Service Expenses</h4>

                {entriesJsx}

                <FormAddEntry onClick={addEntry} />
                <FormHR />
            </Form>
        </FormWrapper>
    );
}

export default ServiceForm;
