import Table from '@/components/ui/Table'
import AppTableWithIndex from '@/views/user/energy/components/ui/AppTableWithIndex'
import { ColumnDef } from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditModal from '@/views/user/energy/components/edit/EditModal'
import { Avatar, Badge, Button } from '@/components/ui'


type FundRequest = {
    id: string
    company: string
    image: string
    email: string
    amount: string
    upload: string
    date: string
    action?: string
    status: 'Pending' | 'Failed' | 'Success'
}
const { Tr, Th, Td, THead, TBody } = Table
const data: FundRequest[] = [
    {
        id: '1',
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        email: 'Dangote@mail.com',
        amount: 'N1,000,000.00',
        upload: 'account_transaction...45773',
        date: '10 June, 2024',
        status: 'Pending'

    },
    {
        id: '2',
        image: '/img/company/glo.png',
        company: 'Dangote Group',
        email: 'Dangote@mail.com',
        amount: 'N1,000,000.00',
        upload: 'account_transaction...45773',
        date: '10 June, 2024',
        status: 'Pending'

    },
    {
        id: '3',
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        email: 'Dangote@mail.com',
        amount: 'N1,000,000.00',
        upload: 'account_transaction...45773',
        date: '10 June, 2024',
        status: 'Failed'

    },
    {
        id: '4',
        image: '/img/company/glo.png',
        company: 'Dangote Group',
        email: 'Dangote@mail.com',
        amount: 'N1,000,000.00',
        upload: 'account_transaction...45773',
        date: '10 June, 2024',
        status: 'Success'

    },
    {
        id: '5',
        image: '/img/company/dangote.png',
        company: 'Dangote Group',
        email: 'Dangote@mail.com',
        amount: 'N1,000,000.00',
        upload: 'account_transaction...45773',
        date: '10 June, 2024',
        status: 'Failed'

    },



]


export default function FundRequestForm() {


    const navigate = useNavigate()
    const [editModal, setEditModal] = useState<boolean>(false)
    const [editData, setEditData] = useState<FundRequest>()

    function handleEdit(id: string) {
        const selectedBusiness = data.find((value, index) => {
            return value.id == id
        })

        setEditData(
            data.find((value) => {
                return value.id == id
            })
        )

        setEditModal(true)
    }

    const columns = useMemo<ColumnDef<FundRequest>[]>(
        () => [
            {
                header: 'id',
                cell: props => {
                    return <p>{props.row.index + 1}</p>
                },

            },
            {
                header: 'COMPANY NAME',
                accessorKey: 'company',
                cell: ({ row }) => {
                    return (
                        <div className={'flex items-center gap-x-2'}>
                            <div className={''}>
                                <Avatar
                                    shape={'circle'}
                                    src={`${row.original.image}`}
                                    alt={'img'}
                                />
                            </div>
                            <div className={''}>
                                <p className={'font-medium text-black'}>
                                    {row.original.company}
                                </p>
                                <p>{row.original.email}</p>
                            </div>
                        </div>

                    )
                }
            },
            {
                header: 'Amount', accessorKey:
                    'amount'
            }
            ,
            {
                header: 'UPLOADS', accessorKey:
                    'upload', cell:
                    ({ row }) => {
                        return (
                            <div className={'flex justify-center items-center gap-2 cursor-pointer'}>
                                <img src={'/img/others/pdf.png'} alt={''} />
                                <p className={'max-w-[6.5rem]'}>{row.original.upload}</p>
                            </div>
                        )
                    }

            }
            ,
            {
                header: 'REG. DATE', accessorKey:
                    'date'
            }
            ,
            {
                header: 'Action', cell:
                    ({ row }) => {
                        return <Button onClick={()=> {

                        }} variant={'default'} className={'border-primary text-primary'}>Fund</Button>
                    }
            },
            { header: 'status', accessorKey: 'status', cell: ({row}) => {
                if (row.original.status == 'Pending')return <Badge className={'bg-warning-badge_bg text-warning-badge_text font-medium'} content={row.original.status}/>
                if (row.original.status == 'Success')return <Badge className={'bg-blue-badge_bg text-blue-badge_text font-medium'} content={row.original.status}/>
                if (row.original.status == 'Failed')return <Badge className={' font-medium'} content={row.original.status}/>
                } }
        ],
        []
    )

    return (
        <div>
            <AppTableWithIndex columns={columns} data={data} />


        </div>
    )
}


