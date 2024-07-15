import { HiOutlineUserGroup } from 'react-icons/hi'
import StatisticCard from '@/components/ui/Card/StatisticCard'
import { SyntheticEvent, useState } from 'react'

import { Button, Dropdown } from '@/components/ui'
import { AiOutlineArrowDown, BsFuelPump } from 'react-icons/all'
import RecentActivities, {
    Acivity,
} from '@/views/user/energy/components/RecentActivities'
import OverAllSales from '@/views/user/energy/components/Sales'

const Home = () => {
    const [hover, setHover] = useState<boolean>(false)
    const [hover1, setHover1] = useState<boolean>(false)
    const [hover2, setHover2] = useState<boolean>(false)
    const [hover3, setHover3] = useState<boolean>(false)
    const dropdownItems = [
        { key: 'a', name: 'Item A' },
        { key: 'b', name: 'Item B' },
        { key: 'c', name: 'Item C' },
        { key: 'd', name: 'Item D' },
    ]

    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }

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
        <Button size={'sm'} className={'flex'}>
            Last 30 Days <AiOutlineArrowDown />
        </Button>
    )
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                <StatisticCard
                    icon={
                        <HiOutlineUserGroup
                            className={hover ? 'text-white' : 'text-primary'}
                        />
                    }
                    avatarClass={hover ? '!bg-primary-200' : '!bg-primary-700'}
                    className={'bg-white'}
                    textClassName={`${hover && 'text-white'} `}
                    label="Balance"
                    valuePrefix={'N'}
                    value={2000}
                    hover={() => setHover(true)}
                    hoverOut={() => setHover(false)}
                    loading={false}
                />
                <StatisticCard
                    icon={
                        <HiOutlineUserGroup
                            className={hover1 ? 'text-white' : 'text-primary'}
                        />
                    }
                    avatarClass={hover1 ? '!bg-primary-200' : '!bg-primary-700'}
                    className={'bg-white'}
                    textClassName={`${hover1 && 'text-white'} `}
                    label="Balance"
                    valuePrefix={'N'}
                    value={2000}
                    hover={() => setHover1(true)}
                    hoverOut={() => setHover1(false)}
                    loading={false}
                />
                <StatisticCard
                    icon={
                        <HiOutlineUserGroup
                            className={hover2 ? 'text-white' : 'text-primary'}
                        />
                    }
                    avatarClass={hover2 ? '!bg-primary-200' : '!bg-primary-700'}
                    className={'bg-white'}
                    textClassName={`${hover2 && 'text-white'} `}
                    label="Balance"
                    valuePrefix={'N'}
                    value={2000}
                    hover={() => setHover2(true)}
                    hoverOut={() => setHover2(false)}
                    loading={false}
                />
                <StatisticCard
                    icon={
                        <HiOutlineUserGroup
                            className={hover3 ? 'text-white' : 'text-primary'}
                        />
                    }
                    avatarClass={hover3 ? '!bg-primary-200' : '!bg-primary-700'}
                    className={'bg-white'}
                    textClassName={`${hover3 && 'text-white'} `}
                    label="Balance"
                    valuePrefix={'N'}
                    value={2000}
                    hover={() => setHover3(true)}
                    hoverOut={() => setHover3(false)}
                    loading={false}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div
                    className={
                        'col-span-1 bg-white p-5 rounded-[10px] lg:col-span-2'
                    }
                >
                    <div className={'flex justify-between'}>
                        <h4 className={'text-primary-dark'}>Sale Report</h4>
                        <Dropdown
                            renderTitle={Toggle}
                            onClick={onDropdownClick}
                        >
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

                <div className={''}>
                    <RecentActivities
                        title={'Top Selling Stations'}
                        data={data}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
