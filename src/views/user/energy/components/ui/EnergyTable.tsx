import { useMemo, useState, useEffect } from 'react'
import Table from '@/components/ui/Table'
import Input from '@/components/ui/Input'
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
} from '@tanstack/react-table'
import { rankItem } from '@tanstack/match-sorter-utils'
import { businessTransactionsData } from './data'
import type { EnergyBusinessTransaction } from './data'
import type {
    ColumnDef,
    FilterFn,
    ColumnFiltersState,
} from '@tanstack/react-table'
import type { InputHTMLAttributes } from 'react'
import { Avatar, Badge, Button, Dropdown, Pagination } from '@/components/ui'
import { AiOutlineSearch, BiSearch, MdFilterList } from 'react-icons/all'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/store'
import EditModal from '@/views/user/energy/components/edit/EditModal'
import EditBusinessForm from '@/views/user/energy/components/edit/EditBusinessForm'

interface DebouncedInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'onChange' | 'size' | 'prefix'
    > {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
}

const { Tr, Th, Td, THead, TBody, Sorter } = Table

function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: DebouncedInputProps) {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="flex justify-end">
            <div className="flex items-center mb-4">
                <Input
                    {...props}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value)

    // Store the itemRank info
    addMeta({
        itemRank,
    })

    // Return if the item should be filtered in/out
    return itemRank.passed
}

export default function EnergyTable() {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const [globalFilter, setGlobalFilter] = useState('')

    const columns = useMemo<ColumnDef<EnergyBusinessTransaction>[]>(
        () => [
            {
                header: 'COMPANY NAME',
                accessorKey: 'company',
                cell: ({ cell, row }) => {
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
                },
            },
            { header: 'WALLET ID', accessorKey: 'walletId' },
            { header: 'WALLET BALANCE', accessorKey: 'balance' },
            { header: 'REG. DATE', accessorKey: 'date' },
            {
                header: 'STATUS',
                accessorKey: 'status',
                cell: ({ cell, row }) => {
                    return (
                        <Badge
                            className={'px-5 py-2 text-md'}
                            innerClass={`capitalize ${
                                row.original.status == 'active'
                                    ? 'bg-[#DCE7FF] text-[#3268E2] '
                                    : 'bg-[#FFCFD9] text-[#D82042] '
                            }`}
                            content={row.original.status}
                        />
                    )
                },
            },
            {
                header: '',
                id: 'actions',
                cell: ({ cell, row }) => {
                    return (
                        <Td>
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
                                                `/energy/business/${row.original.id}`
                                            )
                                        }
                                    >
                                        View
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        eventKey="edit"
                                        onSelect={() =>
                                            handleEdit(row.original.id as string)
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
                    )
                },
            },
        ],
        []
    )

    const navigate = useNavigate();

    const data = useAppSelector(
        (state) => state.business.businessDetails.transaction
    )

    const onPaginationChange = (page: number) => {
        table.setPageIndex(page - 1)
    }

    const [editModal, setEditModal] = useState<boolean>(false)
    const [editData, setEditData] = useState<EnergyBusinessTransaction>()
    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        state: {
            columnFilters,
            globalFilter,
        },
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        debugHeaders: true,
        debugColumns: false,
    })

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

    return (
        <div>
            <div className={'flex justify-between p-4 relative'}>
                <div className={'relative h-[45px]'}>
                    <div
                        className={
                            'absolute bottom-[50%] left-1 transform translate-y-[50%]'
                        }
                    >
                        <BiSearch
                            className={' place-content-center'}
                            size={25}
                        />
                    </div>
                    <DebouncedInput
                        value={globalFilter ?? ''}
                        className="p-2 pl-[2rem] h-[45px]  font-lg shadow border border-block"
                        placeholder="Search all columns..."
                        onChange={(value) => setGlobalFilter(String(value))}
                    />
                </div>
                <div>
                    <Dropdown
                        placement={'bottom-end'}
                        renderTitle={
                            <Button
                                size={'sm'}
                                className={
                                    'flex justify-center items-center gap-x-2'
                                }
                            >
                                <MdFilterList size={20} />
                                Filter
                            </Button>
                        }
                    >
                        <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
                        <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
                        <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
                        <Dropdown.Item eventKey="d">Item D</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
            <Table>

                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            <Th>ID</Th>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <div
                                                {...{
                                                    className:
                                                        header.column.getCanSort()
                                                            ? 'cursor-pointer select-none'
                                                            : '',
                                                    onClick:
                                                        header.column.getToggleSortingHandler(),
                                                }}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                                {
                                                    <Sorter
                                                        sort={header.column.getIsSorted()}
                                                    />
                                                }
                                            </div>
                                        )}
                                    </Th>
                                )
                            })}
                        </Tr>
                    ))}
                </THead>

                <TBody>
                    {table.getRowModel().rows.map((row, index) => {
                        return (
                            <Tr className={``} key={row.id}>
                                <Td>{++index}</Td>
                                {row.getVisibleCells().map((cell, index) => {
                                    return (
                                        <Td className={`${index%2 == 0 || `${index} font-medium text-black`} ${index}`} key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    )
                                })}

                            </Tr>
                        )
                    })}
                </TBody>
            </Table>
            <Pagination
                pageSize={table.getState().pagination.pageSize}
                currentPage={table.getState().pagination.pageIndex + 1}
                total={data.length}
                onChange={onPaginationChange}
            />
            <EditModal dialogIsOpen={editModal} setIsOpen={setEditModal}>
                <EditBusinessForm initialValue={editData!} />
            </EditModal>
        </div>
    )
}
