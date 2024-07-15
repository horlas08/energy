import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    businessTransactionsData,
    EnergyBusinessTransaction, SubstationLogs
} from '@/views/user/energy/components/ui/data'
import { SLICE_BASE_NAME } from './constants'

export type BusinessDetailsState = {
    totalBusiness: number
    active: number
    inActive: number
    totalCard: number
    transaction: EnergyBusinessTransaction[]
}

const initialState: BusinessDetailsState = {
    active: 0,
    transaction: [...businessTransactionsData],
    inActive: 0,
    totalBusiness: 0,
    totalCard: 0,
}

const businessDetailsSlice = createSlice({
    name: `${SLICE_BASE_NAME}/business`,
    initialState,
    reducers: {
        setBusinessDetails(state, action: PayloadAction<BusinessDetailsState>) {
            state.active = action.payload?.active
            state.inActive = action.payload?.inActive
            state.totalBusiness = action.payload?.totalBusiness
            state.totalCard = action.payload?.totalCard
            state.totalCard = action.payload?.totalCard
            state.transaction = action.payload?.transaction
        },

    },
})

export const { setBusinessDetails } = businessDetailsSlice.actions
export default businessDetailsSlice.reducer
