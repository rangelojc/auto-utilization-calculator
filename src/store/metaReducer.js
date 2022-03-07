import { createSlice } from '@reduxjs/toolkit'
import moment from "moment"

export const slice = createSlice({
    name: 'meta',
    initialState: {
        year: 0,
        make: "",
        model: "",
        purchaseDate: "",
        purchaseOdo: 0,
        purchasePrice: 0,
        currentDate: "",
        currentOdo: 0,
        milesTraveled: 0
    },
    reducers: {
        setYear: (state, { payload }) => {
            state.year = payload * 1
        },
        setMake: (state, { payload }) => {
            state.make = payload
        },
        setModel: (state, { payload }) => {
            state.model = payload
        },
        setPurchaseDate: (state, { payload }) => {
            state.purchaseDate = payload
        },
        setPurchasePrice: (state, { payload }) => {
            state.purchasePrice = payload * 1
        },
        setPurchaseOdo: (state, { payload }) => {
            state.purchaseOdo = payload * 1

            if (state.currentOdo) {
                const dff = state.currentOdo - payload;
                state.milesTraveled = dff > 0 ? dff : 0;
            }
        },
        setCurrentOdo: (state, { payload }) => {
            state.currentOdo = payload * 1

            if (state.purchaseOdo) {
                const dff = payload - state.purchaseOdo;
                state.milesTraveled = dff > 0 ? dff : 0;
            }
        },
        setMilesTraveled: (state, { payload }) => {
            state.milesTraveled = payload
        },
        setCurrentDate: (state, { payload }) => {
            state.currentDate = payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { setYear, setMake, setModel, setMilesTraveled, setPurchaseOdo, setCurrentOdo, setPurchasePrice, setPurchaseDate, setCurrentDate } = slice.actions

export default slice.reducer