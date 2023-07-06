import { addDays } from 'date-fns'

import { ILocalDate } from './index.gateway'

export class DateFnsAdapter implements ILocalDate {
    addDays(date: Date | number, amount: number): Date {
        return addDays(date, amount)
    }
}