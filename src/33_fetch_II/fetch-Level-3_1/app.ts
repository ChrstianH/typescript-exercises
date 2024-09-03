import { ICountry } from "./interfaces/ICountry";

const link = "https://restcountries.com/v3.1/all";
const outputElement = document.getElementById("output") as HTMLDivElement;

fetch(link)
  .then((response: Response) => {
    return response.json();
  })
  .then((data: any) => {
    data.forEach((country: ICountry) => {
      const countryBox = document.createElement("div") as HTMLDivElement;
      countryBox.className = "card";
      countryBox.innerHTML = displayCountry(country);
      outputElement.appendChild(countryBox);
    });
  })
  .catch((error: Error) => {
    console.error(error);
  });

function displayCountry(country: ICountry): string {
  const resultString = `
  <div>
      <p>Name common: ${country.name.common}</p>
      <p>Name official: ${country.name.official}</p>
      <p>Capital: ${country.capital ? country.capital.join(", ") : ""}</p>
      <p>Continents: ${country.continents.join(", ")}</p>
      <p>Region: ${country.region}</p>
      <p>Area: ${country.area.toLocaleString("en-US")} km²</p>
      <p>Population: ${country.population.toLocaleString("en-US")}</p>
      </div>
      <div>
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      </div>
      `;
  return resultString;
}
