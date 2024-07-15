import { IoIosArrowBack } from 'react-icons/all'
import EnergyBreadCrumb from '@/views/user/energy/components/ui/EnergyBreadCrumb'
import BusinessDetailStat from '@/views/user/energy/business/BusinessDetails/BusinessDetailStat'
import BusinessDetailTab from '@/views/user/energy/business/BusinessDetails/BusinessDetailTab'
import { Avatar } from '@/components/ui'
import Badge from '@/components/ui/Badge/Badge'
import { useState } from 'react'

export default function BusinessDetails() {
    const [activeTab, setActiveTab] = useState<string>('details')

    return (
        <div className={'w-[95%] mx-auto'}>
            <EnergyBreadCrumb
                title={'Dangote Group'}
                desc={'Manage all the businesses on your portfolio here'}
            />
            <BusinessDetailStat />
            <div className={'grid grid-cols-1  lg:grid-cols-6 gap-4 mb-6'}>
                <div
                    className={`col-span-1 ${activeTab == 'details' ? 'lg:col-span-4': 'lg:col-span-6'}  bg-white rounded-lg`}
                >
                    <BusinessDetailTab  activeTab={activeTab} setActiveTab={setActiveTab}/>
                </div>
                {activeTab == 'details' && (
                    <div className={'col-span-1 lg:col-span-2 '}>
                        <div
                            className={
                                ' bg-white px-[32px] py-[32px] rounded-lg min-h-min'
                            }
                        >
                            <div
                                className={
                                    'flex flex-col items-center justify-center my-4'
                                }
                            >
                                <div className={'mb-[24px] text-center'}>
                                    <Avatar
                                        size={'lg'}
                                        shape={'circle'}
                                        src={'/img/company/dangote.png'}
                                    />
                                    <h6>Dangote Group</h6>
                                    <p>1002546836</p>
                                </div>

                                <div
                                    className={
                                        'bottom px-4 w-full flex flex-col gap-[15px]'
                                    }
                                >
                                    <div className={'grid  grid-cols-2'}>
                                        <div className={''}>Email</div>
                                        <div
                                            className={
                                                'text-right font-semibold text-primary-dark'
                                            }
                                        >
                                            Dangote@mail.com
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={''}>Phone no.</div>
                                        <div
                                            className={
                                                'text-right text-primary-dark'
                                            }
                                        >
                                            07066091112
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={''}>Account level</div>
                                        <div
                                            className={
                                                'text-right text-primary-dark'
                                            }
                                        >
                                            Tier 1
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={''}>Status</div>
                                        <div className={'flex justify-end'}>
                                            <Badge
                                                className="bg-blue-badge_bg text-blue-badge_text float-right w-max self-end"
                                                content={'active'}
                                            />
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={''}>Sign up date</div>
                                        <div
                                            className={
                                                'text-right text-primary-dark'
                                            }
                                        >
                                            May 20, 2024
                                        </div>
                                    </div>
                                    <div className={'grid grid-cols-2'}>
                                        <div className={''}>Address</div>
                                        <div
                                            className={
                                                'text-right text-primary-dark'
                                            }
                                        >
                                            1 Falomo, Ikoyi Lagos
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
