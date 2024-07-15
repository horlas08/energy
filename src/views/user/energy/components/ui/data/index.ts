export type EnergyBusinessTransaction = {
    id: number|string
    company: string
    image: string
    walletId: string
    balance: string
    email: string
    date: string
    status: 'active' | 'inactive'
}


export type SubstationLogs = {
    id?: number
    substation: string
    location: string
    manager: string
    wallet_balance: string
    holding_balance: string
    email: string
}

export type PersonWithSubRow = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
    subRows?: PersonWithSubRow[]
}

export const data100: EnergyBusinessTransaction[] = []

export const businessTransactionsData: EnergyBusinessTransaction[] = [
    {
        id: 1,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '2342456836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'active',
    },
    {
        id: 2,
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        walletId: '1002546836',
        email: 'Dangote@mail.com',
        balance: '₦5,000,000',
        date: '10 June, 2024',
        status: 'inactive',
    },
]
export const substationLogs: SubstationLogs[] = [
    {
        id: 1,
        manager: '2Chance Gouse',
        substation: 'AA Rano Lagos',
        email: 'Dangote@mail.com',
        holding_balance: '₦5,000,000',
        wallet_balance: '₦₦1,180,000',
        location: '700 Oak Street, Brockton MA 2301'
    },
    {
        id: 1,
        manager: 'Chance Gouse',
        substation: 'AA Rano Lagos',
        email: 'Dangote@mail.com',
        holding_balance: '₦5,000,000',
        wallet_balance: '₦₦1,180,000',
        location: '700 Oak Street, Brockton MA 2301'
    },
    {
        id: 1,
        manager: 'Chance Gouse',
        substation: 'AA Rano Lagos',
        email: 'Dangote@mail.com',
        holding_balance: '₦5,000,000',
        wallet_balance: '₦₦1,180,000',
        location: '700 Oak Street, Brockton MA 2301'
    },  {
        id: 1,
        manager: 'Chance Gouse',
        substation: 'AA Rano Lagos',
        email: 'Dangote@mail.com',
        holding_balance: '₦5,000,000',
        wallet_balance: '₦₦1,180,000',
        location: '700 Oak Street, Brockton MA 2301'
    },

]

export const dataWithSubRows: PersonWithSubRow[] = [
    {
        firstName: 'Maria',
        lastName: 'Anders',
        age: 24,
        visits: 28,
        progress: 56,
        status: 'complicated',
        subRows: [
            {
                firstName: 'newspaper',
                lastName: 'dinner',
                age: 25,
                visits: 2,
                progress: 78,
                status: 'single',
                subRows: undefined,
            },
            {
                firstName: 'whip',
                lastName: 'marriage',
                age: 3,
                visits: 95,
                progress: 65,
                status: 'single',
                subRows: undefined,
            },
            {
                firstName: 'bee',
                lastName: 'invention',
                age: 7,
                visits: 83,
                progress: 68,
                status: 'complicated',
                subRows: undefined,
            },
        ],
    },
    {
        firstName: 'Francisco',
        lastName: 'Chang',
        age: 9,
        visits: 90,
        progress: 77,
        status: 'single',
        subRows: [
            {
                firstName: 'beds',
                lastName: 'fairies',
                age: 16,
                visits: 82,
                progress: 87,
                status: 'single',
                subRows: undefined,
            },
            {
                firstName: 'cloth',
                lastName: 'control',
                age: 11,
                visits: 8,
                progress: 75,
                status: 'single',
                subRows: undefined,
            },
        ],
    },
    {
        firstName: 'Roland',
        lastName: 'Mendel',
        age: 1,
        visits: 16,
        progress: 56,
        status: 'single',
        subRows: [
            {
                firstName: 'newspaper',
                lastName: 'dinner',
                age: 25,
                visits: 2,
                progress: 78,
                status: 'single',
                subRows: undefined,
            },
            {
                firstName: 'whip',
                lastName: 'marriage',
                age: 3,
                visits: 95,
                progress: 65,
                status: 'single',
                subRows: undefined,
            },
            {
                firstName: 'bee',
                lastName: 'invention',
                age: 7,
                visits: 83,
                progress: 68,
                status: 'complicated',
                subRows: undefined,
            },
            {
                firstName: 'stage',
                lastName: 'cherries',
                age: 14,
                visits: 94,
                progress: 53,
                status: 'relationship',
                subRows: undefined,
            },
        ],
    },
    {
        firstName: 'Helen',
        lastName: 'Bennett',
        age: 43,
        visits: 94,
        progress: 53,
        status: 'single',
        subRows: [
            {
                firstName: 'scarf',
                lastName: 'requirement',
                age: 23,
                visits: 93,
                progress: 40,
                status: 'relationship',
                subRows: undefined,
            },
        ],
    },
    {
        firstName: 'Yoshi ',
        lastName: 'Tannamuri',
        age: 37,
        visits: 85,
        progress: 28,
        status: 'single',
        subRows: [
            {
                firstName: 'tray',
                lastName: 'chemistry',
                age: 29,
                visits: 55,
                progress: 87,
                status: 'relationship',
                subRows: undefined,
            },
            {
                firstName: 'fiction',
                lastName: 'grade',
                age: 27,
                visits: 98,
                progress: 15,
                status: 'complicated',
                subRows: undefined,
            },
        ],
    },
]
