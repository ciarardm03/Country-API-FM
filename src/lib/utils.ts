import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatNumber(number: number) {
    if (isNaN(number)) return '-'

    const numString = parseInt(String(number)).toString()

    return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
