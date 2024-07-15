import { Button, Dialog } from '@/components/ui'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Form, Formik } from 'formik'
import AddCompany, {
    AddCompanyType,
} from '@/views/user/energy/business/AddCompany/AddCompanyForm'
import { apiEnergyAddCompany } from '@/services/UserService'
import * as Yup from 'yup'
import { EnergyBusinessTransaction } from '@/views/user/energy/components/ui/data'

type EditBusinessModalType = {
    initialValue: EnergyBusinessTransaction
}

export default function EditBusinessForm({
    initialValue,
}: EditBusinessModalType) {
    const [disableSubmit, setDisableSubmit] = useState(false)

    const EditCompanySubmit = async (
        values: EnergyBusinessTransaction,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        setSubmitting(true)
        try {
            // const resp = await apiEnergyAddCompany(values)
            //
            // console.log(resp.data)
            // if (resp.status == 200) {
            //     setSubmitting(false)
            //
            // }
        } catch (errors) {
            // setMessage(
            //     (errors as AxiosError<{ message: string }>)?.response?.data
            //         ?.message || (errors as Error).toString()
            // )
            setSubmitting(false)
        }
    }

    const validationSchema = Yup.object().shape({
        id: Yup.number().optional(),
        company: Yup.string().required('Please enter your company name'),
        email: Yup.string().email().required('Company email is required'),
        walletId: Yup.string().required('Phone number is required'),
        balance: Yup.string().required('Please enter your company address'),
        image: Yup.string().required('Please enter your company tin'),
        date: Yup.string().required('Please enter your cac number'),
        status: Yup.string().required('Please select company logo'),
    })

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                if (!disableSubmit) {
                    EditCompanySubmit(values, setSubmitting)
                } else {
                    setSubmitting(false)
                }
            }}
        >
            {({
                touched,
                errors,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form>
                    <h5 className="mb-4">Edit Company</h5>
                    <div className={'max-h-96  overflow-y-auto'}>
                        <AddCompany
                            setFieldValue={setFieldValue}
                            errors={errors}
                            touched={touched}
                            className={' m-2'}
                        />
                    </div>
                    <div className="grid grid-flow-col mt-5">
                        <Button
                            className="ltr:mr-2 !bg-gray-300 text-black rtl:ml-2"
                            variant="default"
                            // onClick={(e) => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            loading={isSubmitting}
                            type={'submit'}
                            disabled={disableSubmit}
                            variant="solid"
                        >
                            {isSubmitting ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
