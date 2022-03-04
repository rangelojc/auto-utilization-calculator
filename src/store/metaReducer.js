import { createSlice } from '@reduxjs/toolkit'

export const metaStore = createSlice({
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
            state.year = payload
        },
        setMake: (state, { payload }) => {
            state.make = payload
        },
        setModel: (state, { payload }) => {
            state.model = payload
        },
        setPurchasePrice: (state, { payload }) => {
            state.purchasePrice = payload
        },
        setPurchaseOdo: (state, { payload }) => {
            state.purchaseOdo = payload
        },
        setCurrentOdo: (state, { payload }) => {
            state.currentOdo = payload

            if (state.purchaseOdo) {
                const dff = payload - state.purchaseOdo;
                state.milesTraveled = dff > 0 ? dff : 0;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setYear, setMake, setModel, setPurchaseOdo, setCurrentOdo, setPurchasePrice } = metaStore.actions

export default metaStore.reducer