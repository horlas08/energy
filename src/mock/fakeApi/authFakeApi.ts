import { Server, Response } from 'miragejs'
import uniqueId from 'lodash/uniqueId'
import isEmpty from 'lodash/isEmpty'

export default function authFakeApi(server: Server, apiPrefix: string) {
    server.post(`${apiPrefix}/sign-in`, (schema, { requestBody }) => {
        const { email, password } = JSON.parse(requestBody)
        const user = schema.db.signInUserData.findBy({
            email: email,
            password,
        })
        console.log('user', user)
        if (user) {
            const { avatar, userName, email, authority } = user
            return {
                user: { avatar, userName, email, authority },
                token: 'wVYrxaeNa9OxdnULvde1Au5m5w63',
            }
        }
        return new Response(
            401,
            { some: 'header' },
            { message: 'Invalid email or password!' }
        )
    })

    server.post(`${apiPrefix}/sign-out`, () => {
        return true
    })

    server.post(`${apiPrefix}/sign-up`, (schema, { requestBody }) => {
        const { companyName, password, email } = JSON.parse(requestBody)
        const userExist = schema.db.signInUserData.findBy({
            companyName: companyName,
        })
        const emailUsed = schema.db.signInUserData.findBy({ email })
        const newUser = {
            avatar: '/img/avatars/thumb-1.jpg',
            companyName,
            email,
            authority: ['admin', 'user'],
        }
        if (!isEmpty(userExist)) {
            const errors = [
                { message: '', domain: 'global', reason: 'invalid' },
            ]
            return new Response(
                400,
                { some: 'header' },
                { errors, message: 'Company or User already exist!' }
            )
        }

        if (!isEmpty(emailUsed)) {
            const errors = [
                { message: '', domain: 'global', reason: 'invalid' },
            ]
            return new Response(
                400,
                { some: 'header' },
                { errors, message: 'Email already used' }
            )
        }

        schema.db.signInUserData.insert({
            ...newUser,
            ...{
                id: uniqueId('user_'),
                password,
                accountUserName: companyName,
            },
        })
        return {
            user: newUser,
            token: 'wVYrxaeNa9OxdnULvde1Au5m5w63',
        }
    })

    server.post(`${apiPrefix}/forgot-password`, () => {
        return true
    })

    server.post(`${apiPrefix}/reset-password`, () => {
        return true
    })
    server.post(
        `${apiPrefix}/email/otp/validate`,
        (schema, { requestBody }) => {
            const { otp } = JSON.parse(requestBody)
            if (otp.length != 5) {
                return new Response(
                    400,
                    { some: 'header' },
                    { error: 'true', message: 'Invalid Otp Length' }
                )
            }
            if (otp != '12345') {
                return new Response(
                    400,
                    { some: 'header' },
                    { error: 'true', message: 'Invalid Otp' }
                )
            }
            return new Response(
                200,
                { some: 'header' },
                { success: 'true', message: 'Otp Validate Successfully' }
            )
        }
    )
    server.post(`${apiPrefix}/email/otp/resend`, (schema, { requestBody }) => {
        return new Response(
            200,
            { some: 'header' },
            { success: 'true', message: 'Otp Resend Successfully' }
        )
    })
}
