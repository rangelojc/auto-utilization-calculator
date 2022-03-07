import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'fuel',
    initialState: {
        consumption: 0,
        costPer: 0,
        estCostPer: 0,
    },
    reducers: {
        setConsumption: (state, { payload }) => {
            state.consumption = payload

            if (state.costPer && payload) {
                state.estCostPer = state.costPer / payload;
            }
        },
        setCostPer: (state, { payload }) => {
            state.costPer = payload

            if (state.consumption && payload) {
                state.estCostPer = payload / state.consumption;
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { setCostPer, setConsumption } = slice.actions

export default slice.reducer