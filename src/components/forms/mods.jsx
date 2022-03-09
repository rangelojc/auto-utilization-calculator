import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"

import { Form, FormField, FormRow, FormInput, FormLabel, FormHR, FormUnit, FormAddEntry } from "../components";
import { setModsExp } from '../../store/itemizedExpensesReducer.js'

import HelpTooltip from "../help-tooltip"
import Switch from "../switch";

const FormWrapper = styled.div`
`

const Entry = ({ data, update }) => {
    const currency = useSelector(state => state.config.currency);

    return (
        <FormRow>
            <FormField className="form-field xs">
                <FormLabel>Date</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="date" placeholder="" onChange={(v) => update(data.id, "date", v.target.value)} />
                </FormField>
            </FormField>
            <FormField className="form-field">
                <FormLabel>Item</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="text" placeholder="" onChange={(v) => update(data.id, "name", v.target.value)} />
                </FormField>
            </FormField>
            <FormField className="form-field">
                <FormLabel>Cost</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="number" placeholder="0" value={Number(data.cost)} onChange={(v) => update(data.id, "cost", v.target.value * 1)} />
                    <FormUnit>{currency}</FormUnit>
                </FormField>
            </FormField>
        </FormRow >
    )
}

const OverallEntry = ({ data, update }) => {
    const currency = useSelector(state => state.config.currency);

    return (
        <FormRow>
            <FormField className="form-field">
                <FormLabel>Total Cost Estimates</FormLabel>
                <FormField className="form-field pos-rel">
                    <FormInput type="number" placeholder="0" value={Number(data.cost)} onChange={update} />
                    <FormUnit>{currency}</FormUnit>
                </FormField>
            </FormField>
        </FormRow >
    )
}

function ModsForm() {
    const dispatch = useDispatch();

    const [entries, setEntries] = useState([{ id: 0, cost: 0 }]);
    const [ovEntry, setOvEntry] = useState({ cost: 0 });
    const [isOverall, setOverall] = useState(true);

    //redux

    //effect
    useEffect(() => {
        if (isOverall) return;
        const totalCosts = entries.reduce((a, b) => a + b.cost, 0);
        if (!isNaN(totalCosts) && totalCosts !== null) dispatch(setModsExp(totalCosts));
    }, [entries, isOverall])

    useEffect(() => {
        if (!isOverall) return;
        const totalCosts = ovEntry.cost;
        if (!isNaN(totalCosts) && totalCosts !== null) dispatch(setModsExp(totalCosts));
    }, [ovEntry, isOverall])

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
    const itemizedEntriesRow = entries.map(e => {
        return (
            <Entry key={e.id} data={e} update={updateEntry} />
        )
    })

    return (
        <FormWrapper>
            <Form>
                <h4 style={{ display: "flex", alignItems: "center" }}>
                    Mods / Accessories Expenses
                    <HelpTooltip dataTip="You can list an itemized breakdown here or just an overall estimation. <br> The calculation is the same" />
                    <Switch val={isOverall} set={setOverall} />
                </h4>
                {
                    isOverall ?
                        <OverallEntry data={ovEntry} update={(v) => { setOvEntry({ cost: v.target.value * 1 }) }} /> :
                        itemizedEntriesRow
                }

                {
                    isOverall ?
                        <></> :
                        <FormAddEntry onClick={addEntry}>+</FormAddEntry>
                }

                <FormHR />
            </Form>
        </FormWrapper>
    );
}

export default ModsForm;
