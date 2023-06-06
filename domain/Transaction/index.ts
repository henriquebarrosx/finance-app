import { TransactionTypeEnum } from '#/modules/transactions/types'

export class Transaction {
    constructor(
        readonly id: string,
        readonly type: TransactionTypeEnum,
        readonly description: string,
        readonly timestamp: string,
        readonly value: number,
        readonly isExpense: boolean,
    ) { }
}