import { createServer } from 'miragejs'
import appConfig from '@/configs/app.config'

import { signInUserData } from './data/authData'

import { authFakeApi, crmFakeApi, userFakeApi } from './fakeApi'

const { apiPrefix } = appConfig

export function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
            server.db.loadData({
                signInUserData,
            })
        },
        routes() {
            this.urlPrefix = ''
            this.namespace = ''
            this.passthrough((request) => {
                return (
                    request.url.startsWith('http') ||
                    request.url.startsWith('https')
                )
                // return true;
            })
            this.passthrough()

            authFakeApi(this, apiPrefix)
            crmFakeApi(this, apiPrefix)
            userFakeApi(this, apiPrefix)
        },
    })
}
