import Table from '@/components/ui/Table'
import { Badge } from '@/components/ui'

type RecentTransaction = {
    date: string
    company: string
    status: 'Pending' | 'Failed' | 'Success'
    amount: string
    type: string
}
const { Tr, Th, Td, THead, TBody } = Table
const data: RecentTransaction[] = [
    {
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        status: 'Failed',
    },
    {
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        status: 'Pending',
    },
    {
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        status: 'Success',
    },
]
const RecentTransaction = () => {
    return (
        <div>
            <Table>
                <THead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Transaction type</Th>
                        <Th>Company</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </THead>
                <TBody>
                    {data.map((activity, index) => {
                        return (
                            <Tr>
                                <Td>{activity.date}</Td>
                                <Td className={'font-bold text-black'}>
                                    {activity.type}
                                </Td>
                                <Td>{activity.company}</Td>
                                <Td className={'font-bold text-black'}>
                                    {activity.amount}
                                </Td>
                                <Td>
                                    <Badge
                                        innerClass={
                                            activity.status == 'Pending'
                                                ? 'bg-yellow-200 text-yellow-700'
                                                : activity.status == 'Success'
                                                ? 'bg-primary-600'
                                                : ''
                                        }
                                        content={activity.status}
                                    />
                                </Td>
                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
        </div>
    )
}

export default RecentTransaction
