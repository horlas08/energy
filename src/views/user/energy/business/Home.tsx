import EnergyStat from '@/views/user/energy/components/stat/EnergyStat'
import EnergyChart from '@/views/user/energy/components/EnergyChart'
import EnergyActivity from '@/views/user/energy/components/EnergyActivity'
import { Button, Dialog } from '@/components/ui'
import BusinessStat from '@/views/user/energy/components/stat/BusinessStat'
import EnergyTable from '@/views/user/energy/components/ui/EnergyTable'
import EnergyBreadCrumb from '@/views/user/energy/components/ui/EnergyBreadCrumb'
import { Form, Formik } from 'formik'
import AddCompany, {
    AddCompanyType,
} from '@/views/user/energy/business/AddCompany/AddCompanyForm'
import React, { useEffect, useState } from 'react'
import { apiEnergyAddCompany } from '@/services/UserService'
import * as Yup from 'yup'
import AddBusinessModal from '@/views/user/energy/components/ui/AddBusinessModal'
import SuccessModal from '@/views/user/energy/components/ui/SuccessModal'
import { useParams } from 'react-router-dom'
import BusinessDetails from '@/views/user/energy/business/BusinessDetails'

const EnergyBusinessHome = () => {
    const [dialogIsOpen, setIsOpen] = useState(false)
    const [dialogSuccessIsOpen, setDialogSuccessIsOpen] = useState(false)
    const { walletId } = useParams();
    useEffect(() => {
        console.log(walletId)
    }, [])
    const openDialog = () => {
        setIsOpen(true)
    }

    return (

            walletId? (
                <BusinessDetails/>
            ):(
                <>
                    <EnergyBreadCrumb
                        title={'Businesses'}
                        has_modal={true}
                        desc={'Manage all the businesses on your portfolio here'}
                    >
                        <div className={'right'}>
                            <Button
                                type={'button'}
                                variant={'solid'}
                                onClick={() => openDialog()}
                            >
                                Add New Company
                            </Button>
                            <AddBusinessModal
                                dialogIsOpen={dialogIsOpen}
                                setIsOpen={setIsOpen}
                            />
                            <SuccessModal
                                message={'KYC Details Updated'}
                                dialogIsOpen={dialogSuccessIsOpen}
                                setIsOpen={setDialogSuccessIsOpen}
                            />
                        </div>
                    </EnergyBreadCrumb>

                    <BusinessStat />
                    <div className={'bg-white rounded-sm my-[2rem]'}>
                        <EnergyTable />
                    </div>
                </>
            )


    )
}

export default EnergyBusinessHome
