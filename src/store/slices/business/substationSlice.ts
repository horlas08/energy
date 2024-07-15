import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    businessTransactionsData,
    EnergyBusinessTransaction, substationLogs, SubstationLogs
} from '@/views/user/energy/components/ui/data'
import { SLICE_BASE_NAME } from './constants'


export type SubstationLogsState = {
    activeSubstation: number
    inactiveSubstation: number
    totalSubstation: number
    logs: SubstationLogs[]
}

const initialState: SubstationLogsState = {
    activeSubstation: 0,
    logs: [...substationLogs],
    inactiveSubstation: 0,
    totalSubstation: 0,
}

const substationSlice = createSlice({
    name: `${SLICE_BASE_NAME}/substation`,
    initialState,
    reducers: {

        setSubstationDetails(state, action: PayloadAction<SubstationLogsState>) {
            state.activeSubstation = action.payload?.activeSubstation
            state.inactiveSubstation = action.payload?.inactiveSubstation
            state.totalSubstation = action.payload?.totalSubstation
            state.logs = action.payload?.logs
        },
    },
})

export const { setSubstationDetails } = substationSlice.actions
export default substationSlice.reducer
