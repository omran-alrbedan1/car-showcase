import { CarProps, FilterProps } from "@/types";


export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'x-rapidapi-key': 'd619702c25mshc81ef9ef229ae13p1fafbcjsna40b1cce4910',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const url =`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
    
    try {
        const response = await fetch(url, { headers: headers });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching car data:', error);
        throw new Error('Failed to fetch car data. Please try again.');
    }
}


export const calculateCarRent =(city_mpg:number,year:number)=>{
    const basePricePerDay  = 50 
    const mileageFactor  = 0.1 ;
    const ageFactor  = 0.05 ; 

    const mileageRate = city_mpg * mileageFactor; 

    const ageRate  = (new Date().getFullYear()-year) * ageFactor; 

    const rentalRatePerDay  = basePricePerDay+ mileageRate + ageRate
    return rentalRatePerDay.toFixed(0)


}

export const generateCarImageUrl = (car:CarProps,angle?:string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage')    ;
    
    const {make,year,model} = car ;
    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make',make);
    url.searchParams.append('modelFamily',model.split(' ')[0]);
    url.searchParams.append('zoomType','fullscreen');
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angle',`${angle}`);

    return `${url}`;

}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
  
    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };