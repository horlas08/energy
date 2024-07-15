import Card from '@/components/ui/Card/index'
import Loading from '../../shared/Loading'
import MediaSkeleton from '../../shared/loaders/MediaSkeleton'
import Avatar from '../Avatar'
import { NumericFormat } from 'react-number-format'
import GrowShrinkTag from '../../shared/GrowShrinkTag'
import type { ReactNode } from 'react'

type StatisticCardProps = {
    icon: ReactNode
    avatarClass: string
    label: string
    className: string
    value?: number
    hover?: () => void
    textClassName?: string
    hoverOut?: () => void
    valuePrefix?: string
    loading: boolean
}
const StatisticCard = (props: StatisticCardProps) => {
    const {
        icon,
        textClassName,
        avatarClass,
        label,
        valuePrefix,
        value,
        hoverOut,
        hover,
        loading,
        className,
    } = props

    const avatarSize = 55

    return (
        <Card
            bordered
            className={`hover:bg-primary ${className} `}
            onMouseOver={hover}
            onMouseOut={hoverOut}
        >
            <Loading
                loading={loading}
                customLoader={
                    <MediaSkeleton
                        avatarProps={{
                            className: 'rounded',
                            width: avatarSize,
                            height: avatarSize,
                        }}
                    />
                }
            >
                <div className="flex  justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar
                            shape={'circle'}
                            className={avatarClass}
                            size={avatarSize}
                            icon={icon}
                        />
                        <div className={textClassName}>
                            <span>{label}</span>
                            <h3 className={textClassName}>
                                {valuePrefix}
                                <NumericFormat
                                    thousandSeparator
                                    displayType="text"
                                    value={value}
                                />
                            </h3>
                        </div>
                    </div>
                    {/*<GrowShrinkTag value={growthRate} suffix="%" />*/}
                </div>
            </Loading>
        </Card>
    )
}

export default StatisticCard
