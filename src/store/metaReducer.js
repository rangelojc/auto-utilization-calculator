import { createSlice } from '@reduxjs/toolkit'

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
        setPurchasePrice: (state, { payload }) => {
            state.purchasePrice = payload * 1
        },
        setPurchaseOdo: (state, { payload }) => {
            state.purchaseOdo = payload * 1
        },
        setCurrentOdo: (state, { payload }) => {
            state.currentOdo = payload * 1

            if (state.purchaseOdo) {
                const dff = payload - state.purchaseOdo;
                state.milesTraveled = dff > 0 ? dff : 0;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setYear, setMake, setModel, setPurchaseOdo, setCurrentOdo, setPurchasePrice } = slice.actions

export default slice.reducer