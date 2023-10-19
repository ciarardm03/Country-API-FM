import {useQuery} from '@tanstack/react-query';
import {CountryDataType, QueryCountryDataType} from '@/types';

type UseCountryDataProps = {
    countryName?: string;
    region?: string;
};

export function useCountryData({countryName, region}: UseCountryDataProps) {
    return useQuery<Array<CountryDataType>, Error>(
        ['country-data', countryName, region],
        async () => {
            let endpoint = 'https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital';

            if (countryName && !region) {
                endpoint = `https://restcountries.com/v3.1/name/${countryName}`;
            } else if (region && !countryName) {
                endpoint = `https://restcountries.com/v3.1/region/${region}`;
            }

            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const countries = await response.json();

            return countries.map((country: QueryCountryDataType) => ({
                name: country.name.common,
                capital: country.capital?.[0] || 'N/A',
                population: country.population || 0,
                region: country.region || 'N/A',
                flag: {
                    src: country.flags?.png || '',
                    alt: country.flags?.alt || '',
                },
            })) as Array<CountryDataType>;
        },
        {
            refetchOnWindowFocus: false,
            onError: (err) => {
                console.error(`Error: ${err}`);
            },
        }
    );
}
