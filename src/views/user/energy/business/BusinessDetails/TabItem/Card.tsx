import Table from '@/components/ui/Table'
import { Badge } from '@/components/ui'

type Cards = {
    number: string
    vehicle: string
    date: string
    station: string
    status: 'Inactive' | 'Active'
}
const { Tr, Th, Td, THead, TBody } = Table
const data: Cards[] = [
    {
        number: '2024530-PM',
        vehicle: 'FKJ-254XA',
        date: '6 June 2024',
        station: 'Total Lagos',
        status: 'Inactive',
    },
 {
        number: '2024530-PM',
        vehicle: 'FKJ-254XA',
        date: '6 June 2024',
        station: 'Total Lagos',
        status: 'Inactive',
    },
 {
        number: '2024530-PM',
        vehicle: 'FKJ-254XA',
        date: '6 June 2024',
        station: 'Total Lagos',
        status: 'Active',
    },
 {
        number: '2024530-PM',
        vehicle: 'FKJ-254XA',
        date: '6 June 2024',
        station: 'Total Lagos',
        status: 'Inactive',
    },

]
export default function Cards() {
    return (
        <div>
            <Table>
                <THead>
                    <Tr>
                        <Th>card number</Th>
                        <Th>assigned vehicle</Th>
                        <Th>ISSUED DATE</Th>
                        <Th>FILLING station</Th>
                        <Th>Status</Th>
                    </Tr>
                </THead>
                <TBody>
                    {data.map((card, index) => {
                        return (
                            <Tr>
                                <Td>{card.number}</Td>
                                <Td className={'font-bold text-black'}>
                                    {card.vehicle}
                                </Td>
                                <Td>{card.date}</Td>
                                <Td className={'font-bold text-black'}>
                                    {card.station}
                                </Td>
                                <Td>
                                    <Badge
                                        innerClass={
                                            card.status == 'Inactive'
                                                ? 'bg-warning-badge_bg text-warning-badge_text'
                                                : 'bg-success-badge_bg text-success-badge_text'
                                        }
                                        content={card.status}
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


