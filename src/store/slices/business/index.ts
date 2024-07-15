import { combineReducers } from '@reduxjs/toolkit'
import businessDetails, { BusinessDetailsState } from './businessDetailsSlice'
import substationDetails, { SubstationLogsState } from './substationSlice'

const reducer = combineReducers({
    businessDetails,
    substationDetails
})

export type BusinessState = {
    businessDetails: BusinessDetailsState
    substationDetails: SubstationLogsState
}

export * from './businessDetailsSlice'
export * from './substationSlice'

export default reducer
