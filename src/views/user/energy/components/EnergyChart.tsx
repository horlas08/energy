import StatisticCard from '@/components/ui/Card/StatisticCard'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { SyntheticEvent, useState } from 'react'
import { Button, Dropdown } from '@/components/ui'
import OverAllSales from '@/views/user/energy/components/Sales'
import RecentActivities, {
    Acivity,
} from '@/views/user/energy/components/RecentActivities'
import { AiOutlineArrowDown, BsFuelPump } from 'react-icons/all'
import TopSelling from '@/views/user/energy/components/TopSelling'

export default function EnergyChart() {
    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }
    const data: Acivity[] = [
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    name: 'AA Rano - Kano',
                    quality: '1.5m litres sold',
                    amount: '₦5,562,000',
                },
            ],
        },
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    name: 'AA Rano - Kano',
                    quality: '1.5m litres sold',
                    amount: '₦5,562,000',
                },
            ],
        },
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    name: 'AA Rano - Kano',
                    quality: '1.5m litres sold',
                    amount: '₦5,562,000',
                },
            ],
        },
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    name: 'AA Rano - Kano',
                    quality: '1.5m litres sold',
                    amount: '₦5,562,000',
                },
            ],
        },
        {
            date: '2032',
            data: [
                {
                    icon: <BsFuelPump />,
                    name: 'AA Rano - Kano',
                    quality: '1.5m litres sold',
                    amount: '₦5,562,000',
                },
            ],
        },
    ]
    const Toggle = (
        <Button size={'sm'} className={'flex items-center'}>
            Last 30 Days <AiOutlineArrowDown />
        </Button>
    )

    const dropdownItems = [
        { key: 'a', name: 'Item A' },
        { key: 'b', name: 'Item B' },
        { key: 'c', name: 'Item C' },
        { key: 'd', name: 'Item D' },
    ]

    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div
                className={
                    'col-span-1 bg-white p-5 rounded-[10px] lg:col-span-2'
                }
            >
                <div className={'flex justify-between items-center'}>
                    <h4 className={'text-primary-dark'}>Sale Report</h4>
                    <Dropdown renderTitle={Toggle} onClick={onDropdownClick}>
                        {dropdownItems.map((item) => (
                            <Dropdown.Item
                                key={item.key}
                                eventKey={item.key}
                                onSelect={onDropdownItemClick}
                            >
                                {item.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                </div>
                <OverAllSales />
            </div>
            <div className={'h-full '}>
                <RecentActivities
                    title={'Top Selling Stations'}
                    className={'h-full'}
                    data={data}
                />
            </div>
        </div>
    )
}
