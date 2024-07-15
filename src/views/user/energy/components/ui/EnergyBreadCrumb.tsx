import { Button, Dialog } from '@/components/ui'
import React, { useState } from 'react'
import AddCompany, {
    AddCompanyType,
} from '@/views/user/energy/business/AddCompany/AddCompanyForm'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { apiForgotPassword } from '@/services/AuthService'
import type { AxiosError } from 'axios'
import { apiEnergyAddCompany } from '@/services/UserService'

type EnergyBreadCrumbType = {
    title: string
    desc: string
    has_modal?: boolean
    children?: React.ReactNode
}
export default function EnergyBreadCrumb({
    title,
    desc,
    has_modal = false,
    children,
}: EnergyBreadCrumbType) {
    return (
        <div
            className={
                'flex justify-between flex-col md:flex-row gap-6 md:items-center mt-[20px] mb-[3rem]'
            }
        >
            <div className={'left'}>
                <h3 className={'font-[24px] mb-[10px]'}>{title}</h3>
                <p>{desc}</p>
            </div>
            {has_modal && <>{children}</>}
        </div>
    )
}
