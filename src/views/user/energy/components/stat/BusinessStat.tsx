import StatisticCard from '@/components/ui/Card/StatisticCard'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { useState } from 'react'
import { MdOutlineBarChart } from 'react-icons/all'

export default function BusinessStat() {
    const [hover, setHover] = useState<boolean>(false)
    const [hover1, setHover1] = useState<boolean>(false)
    const [hover2, setHover2] = useState<boolean>(false)
    const [hover3, setHover3] = useState<boolean>(false)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            <StatisticCard
                icon={
                    <MdOutlineBarChart
                        className={hover ? 'text-white' : 'text-primary'}
                    />
                }
                avatarClass={hover ? '!bg-primary-200' : '!bg-primary-700'}
                className={'bg-white'}
                textClassName={`${hover && 'text-white'} `}
                label="Total Businesses"
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
                label="Active"
                // valuePrefix={'N'}
                value={1253100}
                hover={() => setHover1(true)}
                hoverOut={() => setHover1(false)}
                loading={false}
            />
            <StatisticCard
                icon={
                    <MdOutlineBarChart
                        className={hover2 ? 'text-white' : 'text-primary'}
                    />
                }
                avatarClass={hover2 ? '!bg-primary-200' : '!bg-primary-700'}
                className={'bg-white'}
                textClassName={`${hover2 && 'text-white'} `}
                label="Inactive"
                valuePrefix={'N'}
                value={5235}
                hover={() => setHover2(true)}
                hoverOut={() => setHover2(false)}
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
                label="Total Cards"
                valuePrefix={'N'}
                value={905205}
                hover={() => setHover3(true)}
                hoverOut={() => setHover3(false)}
                loading={false}
            />
        </div>
    )
}
