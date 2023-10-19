import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

export function useSpecificCountryData() {
  const { country } = useParams()

  if (!country) {
    throw new Error('Undefined country params')
  }

  return useQuery([ 'specific-country', country ], async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const [ data ] = await response.json()

    const {
      flags,
      name: { common, nativeName },
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders = [],
    } = data

    return {
      flag: {
        src: flags?.png,
        alt: flags?.alt || `${common} flag`,
      },
      name: {
        common,
        native: nativeName,
      },
      population,
      region,
      subregion,
      capital: capital[0] || 'N/A',
      tld: tld[0] || 'N/A',
      currencies,
      languages,
      borders,
    }
  })
}
