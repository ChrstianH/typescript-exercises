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

characterElement.addEventListener("click", async () => {
  try {
    const response = await fetch(CHARACTER_ROUTE);
    const data = await response.json();
    const results: ICharacterResult[] = data.results;
    outputElement.innerHTML = "";

    for (const result of results) {
      const characterContainer = document.createElement(
        "div"
      ) as HTMLDivElement;
      characterContainer.className = "card";

      characterContainer.innerHTML = displayCharacter(result);
      outputElement.appendChild(characterContainer);
    }
  } catch (error) {
    console.error(error);
  }
});
locationElement.addEventListener("click", async () => {
  try {
    const response = await fetch(LOCATION_ROUTE);
    const data = await response.json();
    const results: ILocationResult[] = data.results;
    outputElement.innerHTML = "";

    for (const result of results) {
      const locationContainer = document.createElement("div") as HTMLDivElement;
      locationContainer.className = "card";

      locationContainer.innerHTML = await displayLocation(result);
      outputElement.appendChild(locationContainer);
    }
  } catch (error) {
    console.error(error);
  }
});

episodeElement.addEventListener("click", async () => {
  try {
    const response = await fetch(EPISODES_ROUTE);
    const data = await response.json();
    const results: IEpisodeResult[] = data.results;
    outputElement.innerHTML = "";

    for (const result of results) {
      const episodeContainer = document.createElement("div") as HTMLDivElement;
      episodeContainer.className = "card";

      episodeContainer.innerHTML = await displayEpisode(result);
      outputElement.appendChild(episodeContainer);
    }
  } catch (error) {
    console.error(error);
  }
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

async function displayLocation(result: ILocationResult) {
  const resultString = `
    <div>
      <p>Name: ${result.name}</p>
      <p>Type: ${result.type}</p>
      <p>Dimension: ${result.dimension}</p>
      <p>Residents: ${await fetchResidents(result.residents)}</p>
    </div>
    `;
  return resultString;
}

async function fetchResidents(locationResidents: string[]): Promise<string> {
  let resultArray: string[] = [];
  for (const resident of locationResidents) {
    //  locationResidents.forEach(async (resident: string) => {
    try {
      const response = await fetch(resident);
      const data = await response.json();
      resultArray.push(data.name);
    } catch (error) {
      console.error(error);
    }
  }
  return resultArray.join(", ");
}

async function displayEpisode(result: IEpisodeResult) {
  const resultString = `
    <div>
      <p>Name: ${result.name}</p>
      <p>Air date: ${result.air_date}</p>
      <p>Episode: ${result.episode}</p>
      <p>Characters: ${await fetchResidents(result.characters)}</p>
    </div>
    `;
  return resultString;
}
