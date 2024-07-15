import classNames from 'classnames'
import { HiChevronRight, HiOutlinePencil } from 'react-icons/hi'
import type { CommonProps } from '../@types/common'
import type { MouseEvent } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/all'
import { Button } from '@/components/ui'

interface NextProps extends CommonProps {
    currentPage: number
    pageCount: number
    pagerClass: {
        default: string
        inactive: string
        active: string
        disabled: string
    }
    onNext: (e: MouseEvent<HTMLSpanElement>) => void
}

const Next = (props: NextProps) => {
    const { currentPage, pageCount, pagerClass, onNext } = props

    const disabled = currentPage === pageCount || pageCount === 0

    const onNextClick = (e: MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        if (disabled) {
            return
        }
        onNext(e)
    }

    const pagerNextClass = classNames(
        pagerClass.default,
        'pagination-pager-next',
        disabled ? pagerClass.disabled : pagerClass.inactive
    )
return (
    <Button onClick={onNextClick} className={ `mr-2 w-auto flex place-content-center gap-2 ${pagerNextClass}`} disabled={disabled}>
        <div className={'font-medium'}>Next</div>
        <div className={''}>
            <FaArrowRight className={''} />
        </div>
    </Button>
)
    
}

export default Next
