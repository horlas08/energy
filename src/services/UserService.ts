import ApiService from './ApiService'
import {
    EnergyAddCompanyCredential,
    EnergyAddCompanyResponse,
} from '@/@types/user'
import { AxiosResponse } from 'axios'

export async function apiEnergyAddCompany(
    value: EnergyAddCompanyCredential
): Promise<AxiosResponse<EnergyAddCompanyResponse>> {
    return ApiService.fetchData({
        url: '/energy/company/add',
        method: 'post',
        data: value,
    })
}
