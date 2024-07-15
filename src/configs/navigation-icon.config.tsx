import {
    DashboardIcon,
    BusinessIcon,
    SubstationIcon,
    TransactionsIcon,
    SettingsIcon,
    ReportsIcon,
    CardManagementIcon,
    StaffsIcon,
    HoldingBalanceIcon,
    FundRequestIcon,
} from '@/configs/menu-svg-icon'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    home: <DashboardIcon />,
    business: <BusinessIcon />,
    substations: <SubstationIcon />,
    transactions: <TransactionsIcon />,
    fundRequest: <FundRequestIcon />,
    cardManagement: <CardManagementIcon />,
    holdingBalance: <HoldingBalanceIcon />,
    staff: <StaffsIcon />,
    reports: <ReportsIcon />,
    settings: <SettingsIcon />,
}

export default navigationIcon
