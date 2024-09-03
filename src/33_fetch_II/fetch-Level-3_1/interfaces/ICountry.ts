export interface ICountry {
  area: number;
  capital: string[];
  continents: string[];
  name: ICountryName;
  population: number;
  region: string;
  flags: IFlag;
}

interface ICountryName {
  common: string;
  official: string;
}

interface IFlag {
  png: string;
  svg: string;
}
