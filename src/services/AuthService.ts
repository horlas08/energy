import ApiService from './ApiService'
import {
    SignInCredential,
    SignUpCredential,
    ForgotPassword,
    ResetPassword,
    SignInResponse,
    SignUpResponse,
    otpNumber,
    otpResponse,
} from '@/@types/auth'
import { AxiosResponse } from 'axios'

export async function apiSignIn(data: SignInCredential) {
    return ApiService.fetchData<SignInResponse>({
        url: '/sign-in',
        method: 'post',
        data,
    })
}

export async function apiSignUp(data: SignUpCredential) {
    return ApiService.fetchData<SignUpResponse>({
        url: '/sign-up',
        method: 'post',
        data,
    })
}

export async function apiSignOut() {
    return ApiService.fetchData({
        url: '/sign-out',
        method: 'post',
    })
}

export async function apiForgotPassword(data: ForgotPassword) {
    return ApiService.fetchData({
        url: '/forgot-password',
        method: 'post',
        data,
    })
}

export async function apiResetPassword(data: ResetPassword) {
    return ApiService.fetchData({
        url: '/reset-password',
        method: 'post',
        data,
    })
}
export async function apiValidateEmailVerificationOtp(
    data: otpNumber
): Promise<AxiosResponse<otpResponse>> {
    return ApiService.fetchData({
        url: '/email/otp/validate',
        method: 'post',
        data,
    })
}
export async function apiEmailVerificationOtpResend(): Promise<
    AxiosResponse<otpResponse>
> {
    return ApiService.fetchData({
        url: '/email/otp/resend',
        method: 'post',
    })
}
