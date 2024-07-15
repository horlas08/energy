import { useCallback, useState } from 'react'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Alert from '@/components/ui/Alert'
import ActionLink from '@/components/shared/ActionLink'
import { apiForgotPassword } from '@/services/AuthService'
import useTimeOutMessage from '@/utils/hooks/useTimeOutMessage'
import {
    Field,
    Form,
    Formik,
    FormikErrors,
    FormikTouched,
    FormikValues,
} from 'formik'

import type { CommonProps } from '@/@types/common'
import type { AxiosError } from 'axios'
import { Upload } from '@/components/ui'
import {
    FcImageFile,
    FiUploadCloud,
    HiOutlineCloudUpload,
    RiDeleteBin5Line,
} from 'react-icons/all'
import { useDropzone } from 'react-dropzone'

interface AddCompanyFormProps extends CommonProps {
    disableSubmit?: boolean
    signInUrl?: string
    errors: FormikErrors<AddCompanyType>
    touched: FormikTouched<AddCompanyType>
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean
    ) => Promise<void | FormikErrors<FormikValues>>
}

export type AddCompanyType = {
    companyName: string
    email: string
    phone: string
    companyAddress: string
    cac: string
    tin: string
    image: string
}

export default function AddCompanyForm(props: AddCompanyFormProps) {
    const {
        setFieldValue,
        errors,
        touched,
        disableSubmit = false,
        className,
        signInUrl = '/sign-in',
    } = props

    const [message, setMessage] = useTimeOutMessage()
    const [avatarImg, setAvatarImg] = useState<string | null>(null)

    const onFileUpload = (files: File[]) => {
        if (files.length > 0) {
            setAvatarImg(URL.createObjectURL(files[0]))
            setFieldValue('image', URL.createObjectURL(files[0]))
        }
    }

    const beforeUpload = (files: FileList | null) => {
        let valid: string | boolean = true

        const allowedFileType = ['image/jpeg', 'image/png']
        if (files) {
            for (const file of files) {
                if (!allowedFileType.includes(file.type)) {
                    valid = 'Please upload a .jpeg or .png file!'
                }
            }
        }

        return valid
    }

    return (
        <div className={className}>
            {message && (
                <Alert showIcon className="mb-4" type="danger">
                    {message}
                </Alert>
            )}

            <FormContainer>
                <div className={''}>
                    <FormItem
                        labelClass={'font-medium'}
                        label={'Company Name'}
                        invalid={errors.companyName && touched.companyName}
                        errorMessage={errors.companyName}
                    >
                        <Field
                            className={'font-semibold text-black'}
                            type="text"
                            autoComplete="off"
                            name="companyName"
                            // placeholder="Email"
                            component={Input}
                        />
                    </FormItem>
                    <div className={'flex justify-between gap-x-3'}>
                        <FormItem
                            labelClass={'font-medium'}
                            label={'Email Address'}
                            invalid={errors.email && touched.email}
                            errorMessage={errors.email}
                        >
                            <Field
                                className={'font-semibold text-black'}
                                type="email"
                                autoComplete="off"
                                name="email"
                                // placeholder="Email"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem
                            labelClass={'font-medium'}
                            label={'Phone Number'}
                            invalid={errors.phone && touched.phone}
                            errorMessage={errors.phone}
                        >
                            <Field
                                className={'font-semibold text-black'}
                                type="text"
                                autoComplete="off"
                                name="phone"
                                // placeholder="Email"
                                component={Input}
                            />
                        </FormItem>
                    </div>
                    <FormItem
                        labelClass={'font-medium'}
                        label={'Company Address'}
                        invalid={
                            errors.companyAddress && touched.companyAddress
                        }
                        errorMessage={errors.companyAddress}
                    >
                        <Field
                            className={'font-semibold text-black'}
                            type="text"
                            autoComplete="off"
                            name="companyAddress"
                            // placeholder="Company Address"
                            component={Input}
                        />
                    </FormItem>
                    <div className={'flex justify-between gap-x-3'}>
                        <FormItem
                            labelClass={'font-medium'}
                            label={'TIN'}
                            invalid={errors.tin && touched.tin}
                            errorMessage={errors.tin}
                        >
                            <Field
                                className={'font-semibold text-black'}
                                type="text"
                                autoComplete="off"
                                name="tin"
                                // placeholder="Email"
                                component={Input}
                            />
                        </FormItem>
                        <FormItem
                            labelClass={'font-medium'}
                            label={'CAC Reg No.'}
                            invalid={errors.cac && touched.cac}
                            errorMessage={errors.cac}
                        >
                            <Field
                                className={'font-semibold text-black'}
                                type="text"
                                autoComplete="off"
                                name="cac"
                                // placeholder="Email"
                                component={Input}
                            />
                        </FormItem>
                    </div>
                    <div>
                        <div
                            className={
                                ' overflow-hidden grid gap-x-3 mt-4  grid-cols-6'
                            }
                        >
                            {avatarImg && (
                                <div
                                    className={
                                        'relative col-span-2 rounded-lg  overflow-hidden'
                                    }
                                >
                                    <div
                                        className={
                                            'icon cursor-pointer absolute bg-white p-2 right-0 shadow-md m-2 rounded-[50%]'
                                        }
                                        onClick={() => {
                                            setAvatarImg('')
                                            setFieldValue('image', '')
                                        }}
                                    >
                                        <RiDeleteBin5Line
                                            color={'black'}
                                            size={18}
                                        />
                                    </div>
                                    <img
                                        src={avatarImg as string}
                                        className={
                                            'w-full h-full max-h-[125px] object-cover bg-cover'
                                        }
                                        alt={'f'}
                                    />
                                </div>
                            )}

                            <Upload
                                draggable
                                uploadLimit={1}
                                showList={true}
                                beforeUpload={beforeUpload}
                                className={`${
                                    avatarImg ? 'col-span-4' : 'col-span-6'
                                } max-h-[125px] ${
                                    errors.image && 'border-red-700'
                                }`}
                                onChange={onFileUpload}
                            >
                                <div className="my-16 text-center">
                                    <div className="text-6xl mb-4 flex justify-center">
                                        <FiUploadCloud size={20} />
                                    </div>
                                    <p className="font-semibold">
                                        <span className="text-primary-200 dark:text-white">
                                            Click to upload{' '}
                                        </span>
                                        <span className="font-normal">
                                            or drag and drop
                                        </span>
                                    </p>
                                    <p className="mt-1 opacity-60 dark:text-white">
                                        PNG, JPG(max. 800x400px)
                                    </p>
                                </div>
                            </Upload>
                        </div>
                        {errors.image && (
                            <div className={'text-red-700 mt-1'}>
                                {errors.image}
                            </div>
                        )}
                    </div>
                </div>
            </FormContainer>
        </div>
    )
}
