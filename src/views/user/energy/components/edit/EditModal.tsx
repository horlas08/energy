import { Button, Dialog } from '@/components/ui'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Form, Formik } from 'formik'
import AddCompany, {
    AddCompanyType,
} from '@/views/user/energy/business/AddCompany/AddCompanyForm'
import { apiEnergyAddCompany } from '@/services/UserService'
import * as Yup from 'yup'

type EditModalType = {
    dialogIsOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    children: JSX.Element
}
export default function EditModal({
    dialogIsOpen,
    setIsOpen,
    children,
}: EditModalType) {
    const onDialogClose = (e: MouseEvent) => {
        setIsOpen(false)
    }

    return (
        <div className={'!h-full !bg-red-700 !grid !place-content-center'}>
            <Dialog
                bodyOpenClassName="!overflow-hidden"
                isOpen={dialogIsOpen}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                // style={{
                //     overlay: {
                //         display: 'grid',
                //         placeContent: 'center',
                //         overflowY: 'hidden',
                //     },
                //     content: {
                //         margin: '0px !important',
                //     },
                // }}
                onClose={(e) => onDialogClose(e as any)}
                onRequestClose={(e) => onDialogClose(e as any)}
            >
                {children}
            </Dialog>
        </div>
    )
}
