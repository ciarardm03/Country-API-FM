import {cn} from '@/lib/utils'
import {ChildrenType} from '@/types'
import Header from '@/components/layouts/Header'
import Container from '@/components/shared/Container'


export default function MainLayout({children}: ChildrenType) {
    return (
        <main className={cn(['flex flex-col', 'gap-0 md:gap-md', 'w-full min-h-screen'])}>
            <Header/>

            <section className={cn(['flex flex-1', 'bg-background', 'text-foreground'])}>
                <Container className={cn(['flex flex-col flex-1', 'h-full', 'gap-y-lg', 'py-md'])}>


                    {children}
                </Container>
            </section>
        </main>
    )
}
