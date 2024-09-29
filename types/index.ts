

import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"| "submit";  
    textStyles?:string; 
    isDisabled?:boolean ;
    rightIcon?:string; 
}
export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer :(manufacturer:string)=>void
}

export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive:string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number
  } 

  export interface FilterProps {
    manufacturer : string ; 
    year:number ; 
    fuel : string ; 
    model:string;
    limit:number ; 
  }

 

  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

  export interface ShowMoreProps {
    pageNumber:number;
    isNext:boolean;
    setLimit:(newLimit:number)=>void;
  }