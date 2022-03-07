import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'config',
    initialState: {
        distanceUnit: "km",
        fuelUnit: "L",
        currency: "₱"
    },
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