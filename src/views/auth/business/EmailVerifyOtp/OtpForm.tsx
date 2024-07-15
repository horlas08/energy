import { useState } from 'react'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import {
    apiEmailVerificationOtpResend,
    apiValidateEmailVerificationOtp,
} from '@/services/AuthService'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import { useNavigate } from 'react-router-dom'
import type { CommonProps } from '@/@types/common'
import type { AxiosError } from 'axios'
import PinInput from 'react-pin-input'
import { Simulate } from 'react-dom/test-utils'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import appConfig from '@/configs/app.config'
import useQuery from '@/utils/hooks/useQuery'
import { toast } from '@/components/ui'
import Notification from '@/components/ui/Notification'

interface ResetPasswordFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
}

type ResetPasswordFormSchema = {
    password: string
    confirmPassword: string
}

const OtpForm = (props: ResetPasswordFormProps) => {
    const { disableSubmit = false, className, signInUrl = '/sign-in' } = props

    const [resetComplete, setResetComplete] = useState(false)

    const [message, setMessage] = useTimeOutMessage()

    const query = useQuery()
    const navigate = useNavigate()
    const [otp, setOtp] = useState<string>('')
    const [disabled, setDisabled] = useState<boolean>(true)

    const onSubmit = async () => {
        setDisabled(true)
        console.log(otp)
        try {
            const resp = await apiValidateEmailVerificationOtp({ otp })
            if (resp.status == 200) {
                setDisabled(false)
                const redirectUrl = query.get(REDIRECT_URL_KEY)
                navigate(
                    redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath
                )
            } else {
                setDisabled(false)
                openNotification('bottom-center', resp?.data.message)
            }
        } catch (errors) {
            openNotification(
                'bottom-center',
                (errors as AxiosError<{ message: string }>)?.response?.data
                    ?.message || (errors as Error).toString()
            )
            setDisabled(false)
        }
    }

    async function handleResend() {
        try {
            const resp = await apiEmailVerificationOtpResend()
            if (resp.status == 200) {
                setMessage(resp.data.message || 'Otp Resend Successfully')
            } else {
                openNotification('bottom-center', resp?.data.message)
            }
        } catch (errors) {
            setMessage(
                (errors as AxiosError<{ message: string }>)?.response?.data
                    ?.message || (errors as Error).toString()
            )
        }
    }

    const openNotification = (
        placement:
            | 'top-start'
            | 'top-center'
            | 'top-end'
            | 'bottom-start'
            | 'bottom-center'
            | 'bottom-end',
        message: string
    ) => {
        toast.push(
            <Notification type="danger">
                <p>{message}</p>
            </Notification>,
            {
                placement: placement,
            }
        )
    }
    return (
        <div className={className}>
            <div className="mb-6">
                <div className={'text-center'}>
                    <h3 className="mb-1">Verify Email</h3>
                    <p className={'w-[70%] mx-auto'}>
                        We just sent a One Time Password. Please check your
                        email and input the OTP.
                    </p>
                </div>
            </div>
            {message && (
                <Alert showIcon className="mb-4" type="success">
                    {message}
                </Alert>
            )}
            <>
                <PinInput
                    secret
                    length={5}
                    initialValue={''}
                    secretDelay={100}
                    type="numeric"
                    inputMode="number"
                    style={{
                        gap: '10px',
                        marginBottom: 35,
                        marginInline: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    inputStyle={{
                        borderColor: '#D6DAE6',
                        width: 42,
                        height: 45,
                        borderRadius: 10,
                        borderWidth: 2,
                    }}
                    inputFocusStyle={{ borderColor: 'green' }}
                    focus={true}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    onChange={(value, index) => {
                        setDisabled(true)
                    }}
                    onComplete={(value, index) => {
                        setOtp(value)
                        setDisabled(false)
                    }}
                />
                <Button
                    block
                    disabled={disabled}
                    variant="solid"
                    type="submit"
                    onClick={onSubmit}
                >
                    {'Confirm'}
                </Button>
            </>

            <div className="mt-4 text-center">
                <div
                    className={'text-xl text-primary cursor-pointer'}
                    onClick={handleResend}
                >
                    Resend
                </div>
            </div>
        </div>
    )
}

export default OtpForm
