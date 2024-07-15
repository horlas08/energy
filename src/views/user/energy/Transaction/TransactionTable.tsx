import Table from '@/components/ui/Table'
import { Avatar, Badge, Dropdown } from '@/components/ui'
import AppTableWithIndex from '@/views/user/energy/components/ui/AppTableWithIndex'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import EditBusinessForm from '@/views/user/energy/components/edit/EditBusinessForm'
import EditModal from '@/views/user/energy/components/edit/EditModal'
import type { EnergyBusinessTransaction } from '@/views/user/energy/components/ui/data'


type Transaction = {
    id: string
    date: string
    company: string
    status: 'Pending' | 'Failed' | 'Success'
    amount: string
    liters: string
    driver: string
    type: string
}
const { Tr, Th, Td, THead, TBody } = Table
const data: Transaction[] = [
    {
        id: '1',
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        driver: 'Samuel O John',
        liters: '500L',
        status: 'Failed',
    },
    {
        id: '1',
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        driver: 'Samuel O John',
        liters: '500L',
        status: 'Pending',
    },
    {
        id: '1',
        date: '10 June, 2024 5:30PM',
        type: 'Wallet Funding',
        company: 'Dangote',
        amount: '₦5,000,000',
        driver: 'Samuel O John',
        liters: '500L',
        status: 'Success',
    },
]




export default function TransactionTable()  {


    const navigate = useNavigate();
    const [editModal, setEditModal] = useState<boolean>(false)
    const [editData, setEditData] = useState<Transaction>();

    function handleEdit(id: string) {
        const selectedBusiness = data.find((value, index) => {
            return value.id == id
        })

        setEditData(
            data.find((value) => {
                return value.id == id
            })
        );

        setEditModal(true)
    }

    const columns = useMemo<ColumnDef<Transaction>[]>(
        () => [
            {
                header: 'id',
                cell: props => {
                    return <p>{props.row.index + 1}</p>
                }
            },
            {
                header: 'company',
                accessorKey: 'company',

            },
            { header: 'Amount', accessorKey: 'amount' },
            { header: 'Driver', accessorKey: 'driver' },
            { header: 'Liters', accessorKey: 'liters' },
            { header: 'type', accessorKey: 'type' },
            { header: 'date', accessorKey: 'date' },
            { header: 'status', accessorKey: 'status' },
            {
                header: '', id: 'action', cell: ({ row }) => {
                    return (
                        <Td id={'8'}>
                            <div>
                                <Dropdown
                                    placement={'bottom-end'}
                                    renderTitle={
                                        <HiOutlineDotsVertical />
                                    }
                                >
                                    <Dropdown.Item
                                        eventKey="view"
                                        onSelect={() =>
                                            navigate(
                                                `/energy/business/details/${row.original.id}`
                                            )
                                        }
                                    >
                                        View
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        eventKey="edit"
                                        onSelect={() =>
                                            handleEdit(row.original.id)
                                        }
                                    >
                                        Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="suspend">
                                        Suspend
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="delete">
                                        Delete
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </Td>
                    );
                }
            }
        ],
        []
    )

    return (
        <div>
            <AppTableWithIndex columns={columns} data={data}/>
            <EditModal dialogIsOpen={editModal} setIsOpen={setEditModal}>
                <></>
                {/*<EditBusinessForm initialValue={editData!} />*/}
            </EditModal>

        </div>
    )
}


