import classNames from 'classnames'
import { HiChevronLeft } from 'react-icons/hi'
import type { CommonProps } from '../@types/common'
import type { MouseEvent } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/all'
import { Button } from '@/components/ui'

interface PrevProps extends CommonProps {
    currentPage: number
    pagerClass: {
        default: string
        inactive: string
        active: string
        disabled: string
    }
    onPrev: (e: MouseEvent<HTMLSpanElement>) => void
}

const Prev = (props: PrevProps) => {
    const { currentPage, pagerClass, onPrev } = props

    const disabled = currentPage <= 1

    const onPrevClick = (e: MouseEvent<HTMLSpanElement>) => {
        if (disabled) {
            return
        }
        onPrev(e)
    }

    const pagerPrevClass = classNames(
        pagerClass.default,
        'pagination-pager-prev',
        disabled ? pagerClass.disabled : pagerClass.inactive
    )

    return (
        <Button onClick={onPrevClick} className={`mr-2 w-auto flex place-content-center gap-2 ${pagerPrevClass}`}
                disabled={disabled}>

            <div className={''}>
                <FaArrowLeft className={''} />
            </div>
            <div className={'font-medium'}>Previous</div>
        </Button>
        // <div
        //     className={`flex text-gray-400 justify-center ${pagerPrevClass}`}
        //     role="presentation"
        //     onClick={onPrevClick}
        // >
        //
        //     <div className={''}>
        //
        //         <FaArrowLeft size={16} className={''} />
        //     </div>
        //     <div className={''}>
        //         Previous
        //     </div>
        // </div>
    )
}

export default Prev
