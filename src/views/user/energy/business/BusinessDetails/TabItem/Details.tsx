import { Field, Form, Formik } from 'formik'
import { FormContainer, FormItem } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import ActionLink from '../../../../../../components/shared/ActionLink'
import * as Yup from 'yup'
import { HiOutlineUser } from 'react-icons/hi'
import SvgIcon from '@/components/shared/SvgIcon'
import { Select } from '@/components/ui'
import AsyncSelect from 'react-select/async'
import { useState } from 'react'
import { type } from 'node:os'
import { bool } from 'yup'

type countryOptionsType = { value: string; label: string; isFixed: boolean }
const countryOptions: countryOptionsType[] = [
    { value: 'nigeria', label: 'Nigeria', isFixed: true },
]
export default function DetailsTab() {
    const [options, setOptions] = useState<countryOptionsType[]>([])
    const [loading, setLoading] = useState(false)

    const promiseOptions = () => {
        setTimeout(() => {
            setOptions(countryOptions)
            setLoading(false)
        }, 1500)
    }

    const onFocus = () => {
        if (options.length === 0) {
            setLoading(true)
            promiseOptions()
        }
    }
    const validationSchema: Yup.ObjectSchema<DetailsFormType> =
        Yup.object().shape({
            email: Yup.string().email().required('Please enter your email'),
            companyName: Yup.string().required(),
            phone: Yup.string().required(),
            zipCode: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required(),
            address: Yup.string().required(),
            country: Yup.string().required(),
        })
    const [_, setValue] = useState('')

    type DetailsFormType = {
        email: string
        companyName: string
        phone: string
        zipCode: string
        city: string
        state: string
        address: string
        country: string
    }
    const initialValue: DetailsFormType = {
        email: 'admin@mail.com',
        companyName: 'Dangote Group',
        phone: '09022372888',
        zipCode: '23333',
        city: 'oyo',
        state: 'oyo',
        address: 'irewolede 1',
        country: 'nigeria',
    }
    const handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '')
        setValue(inputValue)
        return inputValue
    }

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                // if (!disableSubmit) {
                //     onSendMail(values, setSubmitting)
                // } else {
                //     setSubmitting(false)
                // }
            }}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                    <FormContainer>
                        <div
                            className={
                                'grid grid-cols-2 pb-[20px] border-b-gray-300 border-b-2'
                            }
                        >
                            <div className={'top-left '}>
                                <h3>Personal info</h3>
                            </div>
                            <div className={'top-right'}>
                                <FormItem
                                    size={'sm'}
                                    label={'Company Name'}
                                    labelClass={
                                        'font-normal font-normal  text-gray-600'
                                    }
                                    className={'text-black font-medium'}
                                    invalid={
                                        errors.companyName &&
                                        touched.companyName
                                    }
                                    errorMessage={errors.companyName}
                                >
                                    <Field
                                        type="text"
                                        autoComplete="off"
                                        name="companyName"
                                        placeholder="Company Name"
                                        component={Input}
                                    />
                                </FormItem>

                                <FormItem
                                    size={'sm'}
                                    label={'Email Address'}
                                    labelClass={
                                        'font-normal font-normal  text-gray-600'
                                    }
                                    className={'text-black font-medium'}
                                    invalid={errors.email && touched.email}
                                    errorMessage={errors.email}
                                >
                                    <Field
                                        type="email"
                                        autoComplete="off"
                                        name="email"
                                        placeholder="Email"
                                        component={Input}
                                    />
                                </FormItem>

                                <FormItem
                                    size={'sm'}
                                    label={'Phone Number'}
                                    labelClass={
                                        'font-normal font-normal  text-gray-600'
                                    }
                                    className={'text-black font-medium'}
                                    invalid={errors.phone && touched.phone}
                                    errorMessage={errors.phone}
                                >
                                    <Field
                                        prefix={
                                            <div
                                                className={'flex items-center'}
                                            >
                                                <img
                                                    src={
                                                        '/img/countries/ng.png'
                                                    }
                                                    alt={''}
                                                />
                                                <p>+234</p>
                                            </div>
                                        }
                                        type="text"
                                        autoComplete="off"
                                        name="phone"
                                        placeholder="Phone"
                                        component={Input}
                                    />
                                </FormItem>
                            </div>
                        </div>
                        <div
                            className={
                                'grid grid-cols-2 pt-10 pb-[20px] border-b-gray-300 border-b-2'
                            }
                        >
                            <div className={'bottom-left '}>
                                <h3>Address info</h3>
                            </div>
                            <div className={'bottom-right'}>
                                <FormItem
                                    size={'sm'}
                                    label={'Corporate Address'}
                                    labelClass={
                                        'font-normal font-normal  text-gray-600'
                                    }
                                    className={'text-black font-medium'}
                                    invalid={errors.address && touched.address}
                                    errorMessage={errors.address}
                                >
                                    <Field
                                        type="email"
                                        autoComplete="off"
                                        name="address"
                                        placeholder="Company Address"
                                        component={Input}
                                    />
                                </FormItem>
                                <div className={'flex gap-2'}>
                                    <FormItem
                                        size={'sm'}
                                        label={'City'}
                                        labelClass={
                                            'font-normal font-normal  text-gray-600'
                                        }
                                        className={
                                            'text-black w-full font-medium'
                                        }
                                        invalid={errors.city && touched.city}
                                        errorMessage={errors.city}
                                    >
                                        <Field
                                            type="email"
                                            autoComplete="off"
                                            name="city"
                                            placeholder="city"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        size={'sm'}
                                        label={'State'}
                                        labelClass={
                                            'font-normal font-normal  text-gray-600'
                                        }
                                        className={
                                            'text-black w-full font-medium'
                                        }
                                        invalid={errors.state && touched.state}
                                        errorMessage={errors.state}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="state"
                                            placeholder="state"
                                            component={Input}
                                        />
                                    </FormItem>
                                </div>

                                <div className={'flex gap-2'}>
                                    <FormItem
                                        size={'sm'}
                                        label={'Zip Code'}
                                        labelClass={
                                            'font-normal font-normal  text-gray-600'
                                        }
                                        className={
                                            'text-black w-full font-medium'
                                        }
                                        invalid={
                                            errors.zipCode && touched.zipCode
                                        }
                                        errorMessage={errors.zipCode}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="zipCode"
                                            placeholder="zip code"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        // size={'sm'}
                                        label={'Country'}
                                        labelClass={
                                            'font-normal font-normal  text-gray-600'
                                        }
                                        className={
                                            'text-black w-full font-medium'
                                        }
                                        invalid={
                                            errors.country && touched.country
                                        }
                                        errorMessage={errors.country}
                                    >
                                        <Select
                                            options={options}
                                            isLoading={loading}
                                            onFocus={onFocus}
                                        />
                                    </FormItem>
                                </div>
                            </div>
                        </div>
                        <div className={'text-right my-[20px]'}>
                            <Button className={'px-20 mx-2'}>Cancel</Button>
                            <Button
                                className={'px-20 mx-2'}
                                type={'submit'}
                                variant={'solid'}
                            >
                                Save
                            </Button>
                        </div>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    )
}
