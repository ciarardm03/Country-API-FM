import {useSpecificCountryData} from '@/hooks/useSpecificCountryData'
import {cn, formatNumber} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {Link} from 'react-router-dom'
import {Image} from '@/components/shared/Image'
import {
  CardCountryName,
  CardDescriptionTitle,
  CardDescriptionValue,
  CardDescriptionWrapper,
} from '@/components/ui/card'
import React from 'react'

export default function Country() {
    const {data, isSuccess} = useSpecificCountryData()

    const [nativeName, setNativeName] = React.useState<string | undefined>(undefined)
    const [currency, setCurrency] = React.useState<string | undefined>(undefined)
    const [languages, setLanguages] = React.useState<string[]>([])

    React.useEffect(() => {
        if (data && data.name && data.name.native) {
            for (const nativeName in data.name.native) {
                setNativeName(data.name.native[nativeName].common)
                break
            }
        }

        if (data && data.currencies) {
            for (const currencyName in data.currencies) {
                setCurrency(data.currencies[currencyName].name)
                break
            }
        }

        if (data && data.languages) {
            const languagesArray: string[] = Object.values(data.languages)
            setLanguages(languagesArray)
        }

    }, [data])

    return (
        <section className={cn([
            'flex flex-1 flex-col items-start gap-y-lg',
        ])}>
            <Link to={'/'}>
                <Button variant={'secondary'} size={'secondary'}>Back</Button>
            </Link>

            <div className={cn([
                'grid grid-cols-1 md:grid-cols-2',
                'w-full',
                'gap-y-md',
            ])}>
                {
                    isSuccess && data &&
                    <>
                        <Image className={cn(['w-full  h-[213px] lg:h-[320px] xl:h-[420px]', 'shadow-lg'])}
                               src={data.flag.src}
                               alt={data.flag.alt}/>

                        <div className={cn(['country-info', 'px-0 md:px-xl md:py-lg'])}>
                            <CardCountryName>{data.name.common}</CardCountryName>

                            <div className={cn(['grid grid-cols-1 xl:grid-cols-2', 'py-md'])}>
                                <div className={'flex flex-col gap-xs md:gap-y-sm'}>
                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Native Name:</CardDescriptionTitle>
                                        <CardDescriptionValue>{nativeName}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Population:</CardDescriptionTitle>
                                        <CardDescriptionValue>{formatNumber(data.population)}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Region: </CardDescriptionTitle>
                                        <CardDescriptionValue>{data.region}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Sub Region: </CardDescriptionTitle>
                                        <CardDescriptionValue>{data.subregion}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Capital: </CardDescriptionTitle>
                                        <CardDescriptionValue>{data.capital}</CardDescriptionValue>
                                    </CardDescriptionWrapper>
                                </div>

                                <div className={'flex flex-col gap-xs md:gap-y-sm mt-xs xl:mt-0'}>
                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Top Level Domain: </CardDescriptionTitle>
                                        <CardDescriptionValue>{data.tld}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Currencies:</CardDescriptionTitle>
                                        <CardDescriptionValue>{currency}</CardDescriptionValue>
                                    </CardDescriptionWrapper>

                                    <CardDescriptionWrapper>
                                        <CardDescriptionTitle>Languages: </CardDescriptionTitle>
                                        {
                                            languages && languages.join(', ')
                                                .split(', ')
                                                .map((language, index) => (
                                                    <CardDescriptionValue key={index}>{language}</CardDescriptionValue>
                                                ))
                                        }
                                    </CardDescriptionWrapper>
                                </div>
                            </div>

                            <CardDescriptionWrapper className={cn(['flex-wrap', {'hidden': data.borders.length <= 0}])}>
                                <CardDescriptionTitle>Border Countries: </CardDescriptionTitle>
                                {
                                    data.borders.map((border: string, index: number) => (
                                        <Button key={index} disabled={true} size={'sm'}>{border}</Button>
                                    ))
                                }
                            </CardDescriptionWrapper>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}
