import { Button, Dialog } from '@/components/ui'
import { Dispatch, SetStateAction, useState } from 'react'

type SuccessModalType = {
    message: string
    dialogIsOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function SuccessModal({
    message,
    dialogIsOpen,
    setIsOpen,
}: SuccessModalType) {
    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        console.log('onDialogOk', e)
        setIsOpen(false)
    }
    return (
        <>
            <div>
                <Dialog
                    closable={false}
                    isOpen={dialogIsOpen}
                    style={{
                        content: {
                            marginTop: 220,
                        },
                    }}
                    contentClassName="pb-0 px-0"
                    onClose={(e) => onDialogClose(e as any)}
                    onRequestClose={(e) => onDialogClose(e as any)}
                >
                    <div className={'mx-auto w-[80%]  pb-[56px]'}>
                        <div className="px-6 pb-6">
                            <div
                                className={
                                    'gif mx-auto h-[80px] my-10 w-[80px]'
                                }
                            >
                                <img src={'/img/others/success.gif'} alt={''} />
                            </div>
                            <p className={'text-center text-lg text-black'}>
                                {message}
                            </p>
                        </div>
                        <div className="text-center px-6 py-3 ">
                            <Button
                                className={'w-full'}
                                variant="solid"
                                onClick={(e) => onDialogOk(e as any)}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    )
}
