import {cn} from '@/lib/utils'
import Container from '@/components/shared/Container'
import {useTheme} from '@/components/theme'
import {Button} from '@/components/ui/button'
import {Image} from '@/components/shared/Image'
import {Link} from 'react-router-dom'

export default function Header() {
    const {theme, setTheme} = useTheme()

    function toggleTheme() {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <nav
            className={cn([
                'h-[var(--header-height)]',
                'bg-element',
                'border-b',
                'flex items-center justify-between',
            ])}
        >
            <Container className={cn(['flex items-center justify-between'])}>
                <Link to={'/'}>
                    <h1 className={cn(['text-lg md:text-3xl text-foreground font-extrabold'])}>Where in the world?</h1>
                </Link>
                <Button
                    size={'icon'}
                    variant={'icon'}
                    onClick={toggleTheme}
                >
                    <Image
                        className={cn(['w-5 h-5', 'mr-1 md:mr-2'])}
                        src={`/assets/svg/${theme === 'light' ? 'moon' : 'sun'}.svg`}
                        alt={`${theme === 'light' ? 'Moon' : 'Sun'} Icon`}
                    />

                    {`${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                </Button>
            </Container>

        </nav>
    )
}
