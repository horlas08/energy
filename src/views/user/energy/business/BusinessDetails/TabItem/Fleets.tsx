import Table from '@/components/ui/Table'
import { Badge } from '@/components/ui'

type Fleets = {
    driver_name: string
    vehicle_model: string
    plate_number: string
    location: string
    status: 'Inactive' | 'Active'
}
const { Tr, Th, Td, THead, TBody } = Table
const data: Fleets[] = [
    {
        driver_name: 'Danjuma Chinedu  Ayo',
        vehicle_model: 'Camry Hybrid ',
        plate_number: 'FKJ-254XA',
        location: 'Lagos',
        status: 'Inactive',
    },
    {
        driver_name: 'Danjuma Chinedu  Ayo',
        vehicle_model: 'Camry Hybrid ',
        plate_number: 'FKJ-254XA',
        location: 'Lagos',
        status: 'Active',
    },{
        driver_name: 'Danjuma Chinedu  Ayo',
        vehicle_model: 'Camry Hybrid ',
        plate_number: 'FKJ-254XA',
        location: 'Lagos',
        status: 'Inactive',
    },{
        driver_name: 'Danjuma Chinedu  Ayo',
        vehicle_model: 'Camry Hybrid ',
        plate_number: 'FKJ-254XA',
        location: 'Lagos',
        status: 'Inactive',
    },{
        driver_name: 'Danjuma Chinedu  Ayo',
        vehicle_model: 'Camry Hybrid ',
        plate_number: 'FKJ-254XA',
        location: 'Lagos',
        status: 'Inactive',
    },
]
export default function Fleets() {
    return (
        <div>
            <Table>
                <THead>
                    <Tr>
                        <Th>DRIVER’S NAME</Th>
                        <Th>vehicle MODEL</Th>
                        <Th>PLATE NUMBER</Th>
                        <Th>LOCATION</Th>
                        <Th>Status</Th>
                    </Tr>
                </THead>
                <TBody>
                    {data.map((fleet, index) => {
                        return (
                            <Tr>
                                <Td>{fleet.driver_name}</Td>
                                <Td className={'font-bold text-black'}>
                                    {fleet.vehicle_model}
                                </Td>
                                <Td>{fleet.plate_number}</Td>
                                <Td className={'font-bold text-black'}>
                                    {fleet.location}
                                </Td>
                                <Td>
                                    <Badge
                                        innerClass={
                                            fleet.status == 'Inactive'
                                                ? 'bg-warning-badge_bg text-warning-badge_text'
                                                : 'bg-success-badge_bg text-success-badge_text'
                                        }
                                        content={fleet.status}
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


