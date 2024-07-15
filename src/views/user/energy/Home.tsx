import { HiOutlineUserGroup } from 'react-icons/hi'
import StatisticCard from '@/components/ui/Card/StatisticCard'
import { SyntheticEvent, useState } from 'react'
import { Button, Dropdown } from '@/components/ui'
import { AiOutlineArrowDown, BsFuelPump } from 'react-icons/all'
import RecentActivities, {
    Acivity,
} from '@/views/user/energy/components/RecentActivities'
import OverAllSales from '@/views/user/energy/components/Sales'
import EnergyStat from '@/views/user/energy/components/stat/EnergyStat'
import EnergyChart from '@/views/user/energy/components/EnergyChart'
import EnergyActivity from '@/views/user/energy/components/EnergyActivity'

const Home = () => {
    return (
        <>
            <EnergyStat />
            <EnergyChart />
            <EnergyActivity />
        </>
    )
}

export default Home
