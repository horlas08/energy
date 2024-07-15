import navigationIcon from '@/configs/navigation-icon.config'
import type { ElementType, ComponentPropsWithRef } from 'react'

type VerticalMenuIconProps = {
    icon: string
    gutter: string
    className?: string
}

export const Icon = <T extends ElementType>({
    component,
    ...props
}: {
    header: T
} & ComponentPropsWithRef<T>) => {
    const Component = component
    return <Component {...props} />
}

const VerticalMenuIcon = ({
    icon,
    gutter,
    className,
}: VerticalMenuIconProps) => {
    if (typeof icon !== 'string' && !icon) {
        return <div className={className}></div>
    }

    return (
        <span
            className={` text-2xl ${
                gutter ? 'ltr:mr-2 rtl:ml-2' : ''
            } ${className}`}
        >
            {navigationIcon[icon]}
        </span>
    )
}

VerticalMenuIcon.defaultProps = {
    gutter: true,
}

export default VerticalMenuIcon
