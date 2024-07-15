import StatisticCard from '@/components/ui/Card/StatisticCard'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { useState } from 'react'
import { MdOutlineBarChart } from 'react-icons/all'

export default function SubstationStat() {
    const [hover, setHover] = useState<boolean>(false)
    const [hover1, setHover1] = useState<boolean>(false)
    const [hover2, setHover2] = useState<boolean>(false)
    const [hover3, setHover3] = useState<boolean>(false)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <StatisticCard
                icon={
                    <MdOutlineBarChart
                        className={hover ? 'text-white' : 'text-primary'}
                    />
                }
                avatarClass={hover ? '!bg-primary-200' : '!bg-primary-700'}
                className={'bg-white'}
                textClassName={`${hover && 'text-white'} `}
                label="Total Substations"
                valuePrefix={'₦'}
                value={1253100}
                hover={() => setHover(true)}
                hoverOut={() => setHover(false)}
                loading={false}
            />
            <StatisticCard
                icon={
                    <MdOutlineBarChart
                        className={hover1 ? 'text-white' : 'text-primary'}
                    />
                }
                avatarClass={hover1 ? '!bg-primary-200' : '!bg-primary-700'}
                className={'bg-white'}
                textClassName={`${hover1 && 'text-white'} `}
                label="Active Substations"
                // valuePrefix={'N'}
                value={120}
                hover={() => setHover1(true)}
                hoverOut={() => setHover1(false)}
                loading={false}
            />
            <StatisticCard
                icon={
                    <MdOutlineBarChart
                        className={hover3 ? 'text-white' : 'text-primary'}
                    />
                }
                avatarClass={hover3 ? '!bg-primary-200' : '!bg-primary-700'}
                className={'bg-white'}
                textClassName={`${hover3 && 'text-white'} `}
                label="Inactive Substations"
                value={905205}
                hover={() => setHover3(true)}
                hoverOut={() => setHover3(false)}
                loading={false}
            />
        </div>
    )
}
