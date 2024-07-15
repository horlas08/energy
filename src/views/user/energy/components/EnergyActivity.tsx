import RecentTransaction from '@/views/user/energy/components/RecentTransaction'
import TopSelling from '@/views/user/energy/components/TopSelling'

import { BsFuelPump } from 'react-icons/all'
import type { ReactNode } from 'react'

export type Acivities = {
    date: string
    data: {
        icon: ReactNode
        desc: string
        company?: string
        actionBy?: string
        date?: string
    }[]
}
export default function EnergyActivity() {
    const data: Acivities[] = [
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    company: 'Sarah limestone',
                    desc: 'added 25 new radiographs',
                    actionBy: 'Sarah',
                    date: '9 June, 2024',
                },
                {
                    icon: <BsFuelPump />,
                    company: 'Sarah limestone',
                    desc: 'added 25 new radiographs',
                    actionBy: 'Sarah',
                    date: '9 June, 2024',
                },
                {
                    icon: <BsFuelPump />,
                    company: 'Sarah limestone',
                    desc: 'added 25 new radiographs',
                    actionBy: 'Sarah',
                    date: '9 June, 2024',
                },
            ],
        },
    ]
    return (
        <div className={'grid grid-cols-1 gap-4 lg:grid-cols-3 mt-[20px]'}>
            <div className="col-span-1 bg-white  rounded-[10px] lg:col-span-2">
                <h3 className={'p-4'}>Recent Transaction</h3>
                <RecentTransaction />
            </div>
            <div className={''}>
                <TopSelling data={data} title={'Activity'} />
            </div>
        </div>
    )
}
