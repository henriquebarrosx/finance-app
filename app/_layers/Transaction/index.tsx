// 'use client'

import { Transaction } from '#/domain/Transaction'
import { useTransactionViewModel } from '#/modules/transactions'

interface Props {
    data: Transaction
}

export function TransactionItem({ data: transaction }: Props) {
    const transactionViewModel = useTransactionViewModel(transaction)

    return (
        <div
            className='flex justify-between items-center'
            title={transactionViewModel.getTransactionDateTime()}
        >
            <div className='flex gap-3'>
                <div className='rounded-full bg-slate-200 w-12 h-12 grid place-content-center'>
                    {transactionViewModel.getIcon()}
                </div>

                <div className='flex flex-col'>
                    <span className='text-lg text-slate-900 font-medium'>
                        {transactionViewModel.getTypeText()}
                    </span>

                    <span className='text-sm text-slate-600'>
                        {transaction.description}
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-end'>
                <span style={{ color: transactionViewModel.getCostColor() }} className='text-lg font-medium'>
                    {transactionViewModel.getCostWithMask()}
                </span>

                <span className='text-sm text-slate-400'>
                    {transactionViewModel.getTransactionTime()}
                </span>
            </div>
        </div >
    )
}