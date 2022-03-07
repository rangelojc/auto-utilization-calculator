import { createSlice } from '@reduxjs/toolkit'

//create initial state before creating store slice
const urlParams = window.location.search.slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});;

const initialState = {};

switch (urlParams.currency) {
    case "php": initialState.currency = "₱"; break;
    case "usd": initialState.currency = "$"; break;
    case "gbp": initialState.currency = "£"; break;
    case "eur": initialState.currency = "€"; break;
}

switch (urlParams.unit) {
    case "metric":
        initialState.distanceUnit = "km";
        initialState.fuelUnit = "L";
        break;
    case "imperial":
        initialState.distanceUnit = "mi";
        initialState.fuelUnit = "gal";
        break;
}

//create slice
export const slice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setDistanceUnit: (state, { payload }) => {
            state.distanceUnit = payload
        },
        setFuelUnit: (state, { payload }) => {
            state.fuelUnit = payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setDistanceUnit, setFuelUnit } = slice.actions

export default slice.reducer