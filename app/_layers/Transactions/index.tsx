'use client'

import { Transaction } from '#/domain/Transaction'
import { TransactionItem } from '#/app/_layers/Transaction'
import { TransactionTypeEnum } from '#/modules/transactions/types'

export function Transactions() {
    const transactions: Transaction[] = [
        new Transaction('sidad1i', TransactionTypeEnum.WORK, 'Assurance IT', new Date().toISOString(), 2500.50, false),
        new Transaction('sidad2i', TransactionTypeEnum.MEAL, 'Shopping Pátio', new Date('2023-06-04 21:00').toISOString(), 31.99, true),
        new Transaction('sidad3i', TransactionTypeEnum.HEALTH, 'Farmácia Permanente', new Date('2023-06-04 21:00').toISOString(), 58.20, true),
        new Transaction('sidad4i', TransactionTypeEnum.SHOPPING, 'Renner', new Date('2023-06-04 21:00').toISOString(), 58.20, true),
        new Transaction('sidad5i', TransactionTypeEnum.SHOPPING, 'Ótica Diniz', new Date('2023-06-03 21:00').toISOString(), 58.20, true),
        new Transaction('sidad6i', TransactionTypeEnum.MARKET, 'Preço Bom', new Date('2023-06-03 21:00').toISOString(), 58.20, true),
        new Transaction('sidad7i', TransactionTypeEnum.PET, 'Bichos & Sitios', new Date('2023-06-03 21:00').toISOString(), 290.20, true),
        new Transaction('sidad8i', TransactionTypeEnum.TRANSPORT, 'Uber', new Date('2023-06-03 21:00').toISOString(), 290.20, true),
        new Transaction('sidad9i', TransactionTypeEnum.FREE_TIME, 'Praia', new Date('2023-06-03 21:00').toISOString(), 290.20, true),
        new Transaction('sidad10i', TransactionTypeEnum.TRAVEL, 'Gramado', new Date('2023-06-03 21:00').toISOString(), 290.20, true),
        new Transaction('sidad11i', TransactionTypeEnum.SERVICES, 'Amazon Prime', new Date('2023-06-03 21:00').toISOString(), 290.20, true),
    ]

    return (
        <div className='flex flex-col items-start w-[475px] my-6'>
            <span className='text-2xl text-slate-800 font-semibold px-12'>
                Transações recentes
            </span>

            <div className='flex flex-col gap-8 w-full px-12 mt-12  overflow-y-scroll'>
                {transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} data={transaction} />
                ))}
            </div>
        </div>
    )
}