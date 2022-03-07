import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'itemizedExpenses',
    initialState: {
        insuranceLegalExpenses: 0,
        serviceExpenses: 0,
    },
    reducers: {
        setInsuranceLegalExp: (state, { payload }) => {
            state.insuranceLegalExpenses = payload
        },
        setServiceExp: (state, { payload }) => {
            state.serviceExpenses = payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setInsuranceLegalExp, setServiceExp } = slice.actions

export default slice.reducer