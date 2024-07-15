import { Dispatch, SetStateAction, useState } from 'react'
import StatisticCard from '@/components/ui/Card/StatisticCard'
import { MdOutlineBarChart } from 'react-icons/all'
import { Tabs } from '@/components/ui'
import TabList from '@/components/ui/Tabs/TabList'
import TabNav from '@/components/ui/Tabs/TabNav'
import TabContent from '@/components/ui/Tabs/TabContent'
import DetailsTab from '@/views/user/energy/business/BusinessDetails/TabItem/Details'
import Transaction from './TabItem/Transaction'
import Cards from '@/views/user/energy/business/BusinessDetails/TabItem/Card'
import Fleets from '@/views/user/energy/business/BusinessDetails/TabItem/Fleets'

export default function BusinessDetailTab({activeTab, setActiveTab}:{activeTab: string, setActiveTab: Dispatch<SetStateAction<string>>}) {

    return (
        <div>
            <Tabs onChange={tabValue => setActiveTab(tabValue)} defaultValue="details">
                <TabList >
                    <TabNav value="details">Details</TabNav>
                    <TabNav value="transaction">Transactions</TabNav>
                    <TabNav value="cards">Cards</TabNav>
                    <TabNav value="fleets">Fleets</TabNav>
                    <TabNav value="kyc">KYC</TabNav>
                </TabList>
                <div className="p-[24px]">
                    <TabContent value="details">
                        <DetailsTab />
                    </TabContent>
                    <TabContent value="transaction">
                        <Transaction />
                    </TabContent>
                    <TabContent value="cards">
                        <Cards/>
                    </TabContent>
                    <TabContent value="fleets">
                       <Fleets/>
                    </TabContent>
                    <TabContent value="tab5">
                        <p>
                            In C++ its harder to shoot yourself in the foot, but
                            when you do, you blow off your whole leg. (Bjarne
                            Stroustrup)
                        </p>
                    </TabContent>
                </div>
            </Tabs>
        </div>
    )
}
