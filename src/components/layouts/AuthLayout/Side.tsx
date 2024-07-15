import { cloneElement } from 'react'
import Avatar from '@/components/ui/Avatar'
import Logo from '@/components/template/Logo'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

interface SideProps extends CommonProps {
    content?: React.ReactNode
}

const Side = ({ children, content, ...rest }: SideProps) => {
    return (
        <div className="grid lg:grid-cols-3 h-full">
            <div className={'hidden lg:block'}>
                <Splide
                    hasTrack={false}
                    options={{
                        arrows: false,
                        height: '100vh',
                        type: 'loop',
                    }}
                >
                    <SplideTrack>
                        <SplideSlide
                            className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between flex  relative before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-black before:opacity-40 "
                            style={{
                                backgroundImage: `url('/img/others/auth-side/3.jpg')`,
                            }}
                        >
                            <Logo className={'z-[1]'} mode="dark" />
                            <div className="z-[1] mb-[50px]">
                                <div className={'z-[1]'}>
                                    <p className="text-xl text-white mb-4">
                                        The simplest way to manage your fleets
                                        effectively.
                                    </p>
                                    <p className="font-light text-sm text-white opacity-80">
                                        Experience a better and reliable way to
                                        manage your fleets with Quickfill
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide
                            className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex  relative before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-black before:opacity-40 "
                            style={{
                                backgroundImage: `url('/img/others/auth-side/2.png')`,
                            }}
                        >
                            <Logo className={'z-[1]'} mode="dark" />
                            <div className="z-[1] mb-[50px]">
                                <div className={'z-[1]'}>
                                    <p className="text-xl text-white mb-4">
                                        Fleet management on the go - anywhere,
                                        anytime.
                                    </p>
                                    <p className="font-light text-sm text-white opacity-80">
                                        Experience a better and reliable way to
                                        manage your fleets with Quickfill
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide
                            className="bg-no-repeat bg-cover py-6 px-16 flex-col justify-between hidden lg:flex  relative before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-black before:opacity-40 "
                            style={{
                                backgroundImage: `url('/img/others/auth-side/1.png')`,
                            }}
                        >
                            <Logo className={'z-[1]'} mode="dark" />
                            <div className="z-[1] mb-[50px]">
                                <div className={'z-[1]'}>
                                    <p className="text-xl text-white mb-4">
                                        The simplest way to manage your fleets
                                        effectively.
                                    </p>
                                    <p className="font-light text-sm text-white opacity-80">
                                        Experience a better and reliable way to
                                        manage your fleets with Quickfill
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>

            <div className="col-span-2 flex flex-col justify-center items-center bg-white dark:bg-gray-800">
                <div className="xl:min-w-[450px] px-8">
                    <div className="mb-8">{content}</div>
                    {children
                        ? cloneElement(children as React.ReactElement, {
                              ...rest,
                          })
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Side
