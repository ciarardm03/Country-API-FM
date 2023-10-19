import {cn, formatNumber} from '@/lib/utils'
import {
  Card,
  CardContent,
  CardCountryName,
  CardDescription,
  CardDescriptionTitle,
  CardDescriptionValue,
  CardDescriptionWrapper,
  CardImage,
} from '@/components/ui/card'
import {useCountryData} from '@/hooks/useCountryData'
import {useDebounce} from '@uidotdev/usehooks'
import {CountryDataType} from '@/types'
import {Skeleton} from '@/components/ui/skeleton'
import {Link} from 'react-router-dom'
import React from 'react'
import {Input} from '@/components/ui/input'
import Dropdown from '@/components/shared/Dropdown'

export default function Home() {

    const [countryName, setCountryName] = React.useState<string | undefined>(undefined)
    const [region, setRegion] = React.useState<string | undefined>(undefined)

    const debounceSearchTerm = useDebounce(countryName, 2000)

    const {data, isSuccess, isLoading} = useCountryData({
        countryName: debounceSearchTerm,
        region,
    })

    React.useEffect(() => {
        countryName === '' && setCountryName(undefined)
        countryName !== '' && setRegion(undefined)
    }, [countryName])

    return (
        <React.Fragment>
            <div className={cn([
                'flex flex-col items-start gap-y-md',
                'md:flex-row md:justify-between md:items-center',
                'lg:gap-x-md',
            ])}>
                <Input
                    type={'text'}
                    name={'search'}
                    placeholder={'Search for a country...'}
                    className={cn([
                        'text-base tracking-wide  text-foreground',
                        'placeholder:text-foreground/80',
                    ])}
                    onChange={(event) => setCountryName(event.target.value)}
                />
                <Dropdown setRegion={setRegion} region={region}/>
            </div>

            <section className={cn([
                'flex-1',
            ])}>
                <div className={cn([
                    'w-full',
                    'grid grid-cols-1 gap-y-md gap-md',
                    'md:grid-cols-2',
                    'lg:grid-cols-3',
                    'xl:grid-cols-4',
                ])}>
                    {
                        isSuccess && data
                            ? <>
                                {
                                    data.map((country: CountryDataType, index) => (
                                        <Link to={`/${country.name}`} key={index}>
                                            <Card>
                                                <CardImage src={country.flag.src} alt={country.flag.alt ?? 'Flag Image'}/>
                                                <CardContent>
                                                    <CardCountryName>{country.name}</CardCountryName>
                                                    <CardDescription>
                                                        <CardDescriptionWrapper>
                                                            <CardDescriptionTitle>Population:</CardDescriptionTitle>
                                                            <CardDescriptionValue>{formatNumber(country.population)}</CardDescriptionValue>
                                                        </CardDescriptionWrapper>

                                                        <CardDescriptionWrapper>
                                                            <CardDescriptionTitle>Region:</CardDescriptionTitle>
                                                            <CardDescriptionValue>{country.region}</CardDescriptionValue>
                                                        </CardDescriptionWrapper>

                                                        <CardDescriptionWrapper>
                                                            <CardDescriptionTitle>Capital:</CardDescriptionTitle>
                                                            <CardDescriptionValue>{country.capital}</CardDescriptionValue>
                                                        </CardDescriptionWrapper>
                                                    </CardDescription>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))
                                }
                            </>
                            : isLoading
                                ? <>
                                    {
                                        Array.from({length: 8}, (_, index) => index + 1).map((index) => (
                                            <Skeleton
                                                key={index}
                                                className={cn([
                                                        'min-w-sm w-full h-[427px]',
                                                        'bg-element/50',
                                                        'text-foreground',
                                                        'rounded-lg',
                                                        'shadow-lg',
                                                    ],
                                                )}/>
                                        ))
                                    }
                                </>
                                : <>Error</>
                    }
                </div>
            </section>
        </React.Fragment>
    )
}
// https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital
// https://restcountries.com/v3.1/region/{region}
// https://restcountries.com/v3.1/name/{name}
