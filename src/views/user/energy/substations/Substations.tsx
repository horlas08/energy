import EnergyStat from '@/views/user/energy/components/stat/EnergyStat'
import EnergyChart from '@/views/user/energy/components/EnergyChart'
import EnergyActivity from '@/views/user/energy/components/EnergyActivity'
import { Avatar, Badge, Button } from '@/components/ui'
import BusinessStat from '@/views/user/energy/components/stat/BusinessStat'
import EnergyTable from '@/views/user/energy/components/ui/EnergyTable'
import EnergyBreadCrumb from '@/views/user/energy/components/ui/EnergyBreadCrumb'
import SubstationStat from '@/views/user/energy/components/stat/SubstationStat'
import AppTableWithIndex from '@/views/user/energy/components/ui/AppTableWithIndex'
import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { useAppSelector } from '@/store'
import { BsFuelPump } from 'react-icons/all'
import { SubstationLogs } from '@/views/user/energy/components/ui/data'

export default function Substation() {
    const data = useAppSelector(
        (state) => state.business.substationDetails.logs
    )
    const columns = useMemo<ColumnDef<SubstationLogs>[]>(
        () => [
            {
                header: 'SUBSTATION',
                accessorKey: 'substation',
                cell: ({ cell, row }) => {
                    return (
                        <div className={'flex items-center gap-x-2'}>
                            <div className={''}>
                                <Avatar
                                    shape={'circle'}
                                    className={'bg-primary-650'}
                                   icon={<BsFuelPump size={17} className={'text-primary'} />}
                                />
                            </div>
                            <div className={''}>
                                <p className={'font-medium text-black'}>
                                    {row.original.substation}
                                </p>
                                <p className={'font-normal'}>{row.original.email}</p>
                            </div>
                        </div>
                    )
                },
            },
            { header: 'LOCATION', accessorKey: 'location' },
            { header: 'MANAGER', accessorKey: 'manager' },
            { header: 'WALLET BALANCE', accessorKey: 'wallet_balance' },
            { header: 'HOLDING BALANCE', accessorKey: 'holding_balance' },
           
        ],
        []
    )
    return (
        <>
            <EnergyBreadCrumb  desc={'Manage all the businesses on your portfolio here'} title={'Substations'}/>
            <SubstationStat />
            <div className={'bg-white rounded-sm my-[2rem]'}>
                <AppTableWithIndex columns={columns} data={data}/>
            </div>
            {/*<EnergyChart/>*/}
            {/*<EnergyActivity/>*/}
        </>
    )
}
