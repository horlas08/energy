import { useMemo, useState, useEffect, ReactNode } from 'react'
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
import { AiOutlineSearch, BiSearch, HiOutlineMicrophone, MdFilterList } from 'react-icons/all'
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
    prefix?: ReactNode
    InputClassName?: string
    debounce?: number
}

const { Tr, Th, Td, THead, TBody, Sorter } = Table

function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    prefix,
    InputClassName,
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
        <div className="">
            <div className="flex items-center mb-4">
                <Input
                    style={{
                        borderRadius: '8px'
                    }}
                    {...props}
                    className={''}

                    prefix={
                    prefix
                    }
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

type AppTableType= {
    columns: ColumnDef<any, any>[]
    data: any[]
}

export default function AppTableWithIndex({columns, data}:AppTableType) {

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const [globalFilter, setGlobalFilter] = useState('')




    // const data = useAppSelector(
    //     (state) => state.business.businessDetails.transaction
    // )

    const onPaginationChange = (page: number) => {
        table.setPageIndex(page - 1)
    }


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



    return (
        <div>
            <div className={'flex justify-between p-4 relative'}>
                <div className={'relative w-full max-w-[320px] !h-[55px]'}>

                    <DebouncedInput
                        value={globalFilter ?? ''}
                        prefix={<BiSearch
                            className="text-xl cursor-pointer"
                            size={18}
                        />}
                        className="p-2 "
                        InputClassName={' '}
                        placeholder="Search..."
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
                            {/*<Th>ID</Th>*/}
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
                                {/*<Td>{++index}</Td>*/}
                                {row.getVisibleCells().map((cell, idx) => {
                                    return (
                                        <Td className={`${idx%2 == 0 || `${idx} font-medium text-black`} ${idx}`} key={cell.id}>
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

        </div>
    )
}
