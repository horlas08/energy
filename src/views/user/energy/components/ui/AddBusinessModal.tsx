import { Button, Dialog } from '@/components/ui'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Form, Formik } from 'formik'
import AddCompany, {
    AddCompanyType,
} from '@/views/user/energy/business/AddCompany/AddCompanyForm'
import { apiEnergyAddCompany } from '@/services/UserService'
import * as Yup from 'yup'

type AddBusinessModalType = {
    dialogIsOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function AddBusinessModal({
    dialogIsOpen,
    setIsOpen,
}: AddBusinessModalType) {
    const [disableSubmit, setDisableSubmit] = useState(false)

    const onDialogClose = (e: MouseEvent) => {
        setIsOpen(false)
    }

    const AddCompanySubmit = async (
        values: AddCompanyType,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        setSubmitting(true)
        try {
            const resp = await apiEnergyAddCompany(values)

            console.log(resp.data)
            if (resp.status == 200) {
                setSubmitting(false)
            }
        } catch (errors) {
            // setMessage(
            //     (errors as AxiosError<{ message: string }>)?.response?.data
            //         ?.message || (errors as Error).toString()
            // )
            setSubmitting(false)
        }
    }
    const initialValue: AddCompanyType = {
        cac: '',
        email: '',
        companyAddress: '',
        companyName: '',
        image: '',
        phone: '',
        tin: '',
    }

    const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Please enter your company name'),
        email: Yup.string().email().required('Company email is required'),
        phone: Yup.string().required('Phone number is required'),
        companyAddress: Yup.string().required(
            'Please enter your company address'
        ),
        tin: Yup.string().required('Please enter your company tin'),
        cac: Yup.string().required('Please enter your cac number'),
        image: Yup.string().required('Please select company logo'),
    })

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }
    return (
        <Dialog
            isOpen={dialogIsOpen}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
            onClose={(e) => onDialogClose(e as any)}
            onRequestClose={(e) => onDialogClose(e as any)}
        >
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    if (!disableSubmit) {
                        AddCompanySubmit(values, setSubmitting)
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
                        <h5 className="mb-4">Add Company</h5>
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
                                onClick={(e) => onDialogClose(e as any)}
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
        </Dialog>
    )
}
