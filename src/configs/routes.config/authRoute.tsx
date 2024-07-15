import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/energy/sign-in`,
        component: lazy(() => import('@/views/auth/energy/SignIn')),
        authority: [],
    },
    {
        key: 'signIn',
        path: `/business/sign-in`,
        component: lazy(() => import('@/views/auth/energy/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/business/sign-up`,
        component: lazy(() => import('@/views/auth/energy/SignUp')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/energy/sign-up`,
        component: lazy(() => import('@/views/auth/energy/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/energy/forgot-password`,
        component: lazy(() => import('@/views/auth/energy/ForgotPassword')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/business/forgot-password`,
        component: lazy(() => import('@/views/auth/energy/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/energy/reset-password`,
        component: lazy(
            () => import('@/views/auth/energy/ResetPassword/ResetPassword')
        ),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/business/reset-password`,
        component: lazy(
            () => import('@/views/auth/energy/ResetPassword/ResetPassword')
        ),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/energy/email/verification`,
        component: lazy(() => import('@/views/auth/energy/EmailVerifyOtp')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/business/email/verification`,
        component: lazy(() => import('@/views/auth/energy/EmailVerifyOtp')),
        authority: [],
    },
]

export default authRoute
