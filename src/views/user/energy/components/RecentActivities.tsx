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
import { Dropdown } from '@/components/ui'

export type RecentAcivityProps = {
    data?: Acivity[]
    className?: string
    title?: string
    extra?: ReactNode
}
export type Acivity = {
    date: string
    data: {
        icon: ReactNode
        name: string
        quality?: string
        amount?: string
    }[]
}

type RecentActivitiesProps = RecentAcivityProps

const RecentActivities = (props: RecentActivitiesProps) => {
    const { data = [], className, title = 'Recent Transaction', extra } = props

    return (
        <Card className={`${className} !p-0`}>
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
            <div className="mt-6 ">
                {data.length ? (
                    data.map((timeline) => (
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
                                                'text-primary p-3 bg-primary-700'
                                            }
                                            size={40}
                                            icon={activity.icon}
                                        />

                                        <div className="">
                                            <h6 className="text-sm font-bold">
                                                {activity.name}
                                            </h6>
                                            <p className="text-xs">
                                                {activity.quality}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p
                                            className={classNames(
                                                'font-semibold',
                                                'text-gray-900 dark:text-gray-100'
                                            )}
                                        >
                                            {activity.amount}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <div
                        className={
                            ' text-center my-auto h-full grid place-content-center'
                        }
                    >
                        No record available
                    </div>
                )}
                {}
            </div>
        </Card>
    )
}

export default RecentActivities
