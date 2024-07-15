export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    authenticatedBusinessEntryPath: string
    authenticatedEnergyEntryPath: string
    emailVerificationEntryPath: string
    unAuthenticatedEntryPath: string
    unAuthenticatedEnergyEntryPath: string
    unAuthenticatedBusinessEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: '/api',
    authenticatedEntryPath: '/energy/home',
    authenticatedEnergyEntryPath: '/energy/home',
    authenticatedBusinessEntryPath: '/energy/home',
    emailVerificationEntryPath: '/email/verification',
    unAuthenticatedEntryPath: '/sign-in',
    unAuthenticatedEnergyEntryPath: '/energy/sign-in',
    unAuthenticatedBusinessEntryPath: '/business/sign-in',
    tourPath: '/',
    locale: 'en',
    enableMock: true,
}

export default appConfig
