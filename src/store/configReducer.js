import { createSlice } from '@reduxjs/toolkit'

//create initial state before creating store slice
const urlParams = window.location.search.slice(1)
    .split('&')
    .map(p => p.split('='))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});;

const initialState = {
    currency: "₱",
    distanceUnit: "km",
    fuelUnit: "L",
};

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
    initialState: {
        ...initialState,
        advanced: urlParams.advanced === "true",
        _currencyParam: urlParams.currency || "php",
        _unitParam: urlParams.unit || "metric",
        darkMode: false,
    },
    reducers: {
        setDistanceUnit: (state, { payload }) => {
            state.distanceUnit = payload
        },
        setFuelUnit: (state, { payload }) => {
            state.fuelUnit = payload
        },
        setDarkMode: (state, { payload }) => {
            state.darkMode = payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setDistanceUnit, setFuelUnit, setDarkMode } = slice.actions

export default slice.reducer