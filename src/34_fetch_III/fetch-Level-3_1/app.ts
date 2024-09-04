import { ICharacterResult } from "./interfaces/ICharacter";
import { IEpisodeResult } from "./interfaces/IEpisode";
import { ILocationResult } from "./interfaces/ILocation";

const BASE_URL = "https://rickandmortyapi.com/api";
const CHARACTER_ROUTE = `${BASE_URL}/character`;
const LOCATION_ROUTE = `${BASE_URL}/location`;
const EPISODES_ROUTE = `${BASE_URL}/episode`;

const outputElement = document.getElementById("output") as HTMLDivElement;

const characterElement = document.getElementById(
  "api-character"
) as HTMLAnchorElement;
const locationElement = document.getElementById(
  "api-location"
) as HTMLAnchorElement;
const episodeElement = document.getElementById(
  "api-episode"
) as HTMLAnchorElement;

characterElement.addEventListener("click", () => {
  fetch(CHARACTER_ROUTE)
    .then((response: Response) => {
      return response.json();
    })
    .then((data: any) => {
      outputElement.innerHTML = "";
      data.results.forEach((result: ICharacterResult) => {
        const characterContainer = document.createElement(
          "div"
        ) as HTMLDivElement;
        characterContainer.className = "card";

        characterContainer.innerHTML = displayCharacter(result);
        outputElement.appendChild(characterContainer);
      });
    })
    .catch((error: Error) => {
      console.error(error);
    });
});

locationElement.addEventListener("click", () => {
  fetch(LOCATION_ROUTE)
    .then((response: Response) => {
      return response.json();
    })
    .then((data: any) => {
      outputElement.innerHTML = "";
      data.results.forEach((result: ILocationResult) => {
        const locationContainer = document.createElement(
          "div"
        ) as HTMLDivElement;
        locationContainer.className = "card";

        locationContainer.innerHTML = displayLocation(result);
        outputElement.appendChild(locationContainer);
      });
    })
    .catch((error: Error) => {
      console.error(error);
    });
});

episodeElement.addEventListener("click", () => {
  fetch(EPISODES_ROUTE)
    .then((response: Response) => {
      return response.json();
    })
    .then((data: any) => {
      outputElement.innerHTML = "";
      data.results.forEach((result: IEpisodeResult) => {
        const episodeContainer = document.createElement(
          "div"
        ) as HTMLDivElement;
        episodeContainer.className = "card";

        episodeContainer.innerHTML = displayEpisode(result);
        outputElement.appendChild(episodeContainer);
      });
    })
    .catch((error: Error) => {
      console.error(error);
    });
});

function displayCharacter(character: ICharacterResult): string {
  const resultString = `
    <div>
      <p>Name: ${character.name}</p>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>      
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
    </div>
    <img src="${character.image}" alt="${character.name}">
    `;
  return resultString;
}

function displayLocation(location: ILocationResult): string {
  const resultString = `
    <div>
      <p>Name: ${location.name}</p>
      <p>Type: ${location.type}</p>
      <p>Dimension: ${location.dimension}</p>
      <p>Residents: ${fetchResidents(location.residents)}</p>
    </div>
    `;
  return resultString;
}

function fetchResidents(locationResidents: string[]): string {
  const resultArray: string[] = [];
  locationResidents.forEach((resident: string) => {
    fetch(resident)
      .then((response: Response) => {
        return response.json();
      })
      .then((data: ICharacterResult) => {
        resultArray.push(data.name);
      })
      .catch((error: Error) => console.error(error));
  });
  return resultArray.join(", ");
}

function displayEpisode(episode: IEpisodeResult): string {
  const resultString = `
    <div>
      <p>Name: ${episode.name}</p>
      <p>Air date: ${episode.air_date}</p>
      <p>episode: ${episode.episode}</p>
      <p>Residents: ${fetchResidents(episode.characters)}</p>
    </div>
    `;
  return resultString;
}
