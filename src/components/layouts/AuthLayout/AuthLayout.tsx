import Side from './Side'
import Cover from './Cover'
import Simple from './Simple'
import View from '@/views'
import { useAppSelector } from '@/store'
import { LAYOUT_TYPE_BLANK } from '@/constants/theme.constant'
import { matchPath, useNavigate } from 'react-router-dom'

export const matchUrl = (path: '/energy/*' | '/business/*' | '/quickfill/*') =>
    !!matchPath(path, location.pathname)

const AuthLayout = () => {
    const layoutType = useAppSelector((state) => state.theme.layout.type)
    const navigate = useNavigate()

    return (
        <div
            className={`app-layout-blank ${
                layoutType === LAYOUT_TYPE_BLANK
                    ? 'items-center justify-center'
                    : ''
            } flex flex-auto flex-col h-[100vh]`}
        >
            {layoutType === LAYOUT_TYPE_BLANK ? (
                <div className={'!max-w-[500px] '}>
                    <View />
                </div>
            ) : (
                <>
                    {matchUrl('/energy/*') && (
                        <Simple>
                            <View />
                        </Simple>
                    )}
                    {matchUrl('/business/*') && (
                        <Side>
                            <View />
                        </Side>
                    )}
                </>
            )}
        </div>
    )
}

export default AuthLayout
