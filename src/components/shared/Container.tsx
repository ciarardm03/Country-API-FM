import {cn} from '@/lib/utils'
import React from 'react'

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
    return (
        <div className={cn([
            'bg-transparent',
            'w-full',
        ])}>
            <div ref={ref} {...props} className={cn(['max-w-9/10', 'mx-auto', props.className])}>
                {props.children}
            </div>
        </div>
    )
})

export default Container
