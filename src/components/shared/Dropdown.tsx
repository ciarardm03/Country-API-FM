import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Button} from '@/components/ui/button'
import {dropdownMenus} from '@/constants'
import React, {SetStateAction} from 'react'
import { cn } from '@/lib/utils.ts'

type DropdownProps = {
    region?: string,
    setRegion: React.Dispatch<SetStateAction<string | undefined>>
}
export default function Dropdown({region, setRegion}: DropdownProps) {
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    const handleMenuClick = (menuName: string) => {
        setRegion(menuName);
        setIsPopoverOpen(false); // Close the Popover after selecting a menu item
    };

    return (
        <Popover open={isPopoverOpen} onOpenChange={() => setIsPopoverOpen(true)} >
            <PopoverTrigger asChild onClick={() => setIsPopoverOpen(true)}>
                <Button className={cn(['h-10 md:h-[56px]'])}>
                    {region ? region : 'Filter by Region'}
                    <span></span>
                </Button>
            </PopoverTrigger>

            <PopoverContent onMouseLeave={() => setIsPopoverOpen(false)}>
                {
                    dropdownMenus.map((menu, index) => {
                        return (
                            <Button
                                key={index}
                                variant={'ghost'}
                                size={'ghost'}
                                onClick={() => handleMenuClick(menu.name)}
                            >
                                {menu.name}
                            </Button>
                        )
                    })
                }
            </PopoverContent>
        </Popover>
    )
}
