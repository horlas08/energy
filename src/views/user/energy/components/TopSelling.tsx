import Button from '@/components/ui/Button'

import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import Avatar from '../../../../components/ui/Avatar'
import {
    HiOutlineDotsVertical,
    HiOutlineShoppingCart,
    HiOutlineSwitchHorizontal,
} from 'react-icons/hi'
import Card from '@/components/ui/Card'
import classNames from 'classnames'
import { Acivities } from '@/views/user/energy/components/EnergyActivity'
import { Dropdown } from '@/components/ui'

export type RecentAcivityProps = {
    data?: Acivities[]
    className?: string
    title?: string
    extra?: ReactNode
}

type RecentActivitiesProps = RecentAcivityProps

const TopSelling = (props: RecentActivitiesProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/app/wallets')
    }

    const { data = [], className, title = 'Recent Transaction', extra } = props

    return (
        <Card className={className}>
            <div className={'flex justify-between'}>
                <div className="flex items-center justify-between">
                    <h4>{title}</h4>
                    {extra}
                </div>
                <div>
                    <Dropdown
                        placement={'bottom-end'}
                        renderTitle={<HiOutlineDotsVertical />}
                    >
                        <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
                        <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                        <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                        <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

            <div className="mt-6">
                {data.map((timeline) => (
                    <div key={timeline.date} className="mb-6">
                        {timeline.data.map((activity, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between mb-4"
                            >
                                <div className="flex items-center gap-2">
                                    <Avatar
                                        shape={'circle'}
                                        className={
                                            'text-primary bg-primary-700'
                                        }
                                        size={35}
                                        src={'/img/company/dangote.png'}
                                        // icon={activity.icon}
                                    />

                                    <div className="">
                                        <h6 className="text-xs">
                                            <span className={'text-primary '}>
                                                {activity.company}{' '}
                                            </span>
                                            {activity.desc}
                                        </h6>
                                        <p className="text-xs mt-1">
                                            Action by {activity.actionBy},{' '}
                                            {activity.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default TopSelling
