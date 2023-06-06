import React, { createElement } from 'react'
import { format, isToday, isYesterday } from 'date-fns'

import { MdWorkOutline } from 'react-icons/md'
import { TbDog, TbBalloon } from 'react-icons/tb'
import { BiCart, BiWrench } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineHeart, AiOutlineCar } from 'react-icons/ai'
import { IoFastFoodOutline, IoAirplaneOutline } from 'react-icons/io5'

import { Transaction } from '#/domain/Transaction'
import { TransactionTypeEnum } from '#/modules/transactions/types'

export function useTransactionViewModel(transaction: Transaction): ITransactionViewModel {
    function getCostWithMask(): string {
        const numberFormatOptions = { style: 'currency', currency: 'BRL' }
        const formatter = new Intl.NumberFormat('pt-BR', numberFormatOptions)
        return formatter.format(transaction.value)
    }

    function getTransactionTime(): string {
        const parsedDate = new Date(transaction.timestamp)

        if (isToday(parsedDate)) {
            return format(parsedDate, 'HH:mm')
        }

        if (isYesterday(parsedDate)) {
            return 'Ontem'
        }

        return format(parsedDate, 'dd/MM/yyyy HH:mm')
    }

    function getTransactionDateTime(): string {
        const parsedDate = new Date(transaction.timestamp)
        return format(parsedDate, 'dd/MM/yyyy HH:mm')
    }

    function getIcon(): React.ReactNode {
        const iconByType = {
            [TransactionTypeEnum.WORK]: MdWorkOutline,
            [TransactionTypeEnum.MEAL]: IoFastFoodOutline,
            [TransactionTypeEnum.HEALTH]: AiOutlineHeart,
            [TransactionTypeEnum.SHOPPING]: HiOutlineShoppingBag,
            [TransactionTypeEnum.PET]: TbDog,
            [TransactionTypeEnum.TRANSPORT]: AiOutlineCar,
            [TransactionTypeEnum.FREE_TIME]: TbBalloon,
            [TransactionTypeEnum.MARKET]: BiCart,
            [TransactionTypeEnum.TRAVEL]: IoAirplaneOutline,
            [TransactionTypeEnum.SERVICES]: BiWrench,
        }

        return createElement(iconByType[transaction.type], { color: '#424242', size: 24 })
    }

    function getTypeText(): string {
        const iconBgColorByType = {
            [TransactionTypeEnum.WORK]: 'Trabalho',
            [TransactionTypeEnum.MEAL]: 'Alimentação',
            [TransactionTypeEnum.HEALTH]: 'Saúde',
            [TransactionTypeEnum.SHOPPING]: 'Compras',
            [TransactionTypeEnum.PET]: 'Pet',
            [TransactionTypeEnum.TRANSPORT]: 'Transporte',
            [TransactionTypeEnum.FREE_TIME]: 'Lazer',
            [TransactionTypeEnum.MARKET]: 'Mercado',
            [TransactionTypeEnum.TRAVEL]: 'Viagem',
            [TransactionTypeEnum.SERVICES]: 'Serviços',
        }

        return iconBgColorByType[transaction.type]
    }

    function getCostColor(): string {
        return transaction.isExpense ? '#ef5350' : '#4caf50'
    }

    return {
        getIcon,
        getTypeText,
        getCostColor,
        getCostWithMask,
        getTransactionTime,
        getTransactionDateTime,
    }
}

export interface ITransactionViewModel {
    getCostColor(): string
    getTypeText(): string
    getCostWithMask(): string
    getIcon(): React.ReactNode
    getTransactionTime(): string
    getTransactionDateTime(): string
}