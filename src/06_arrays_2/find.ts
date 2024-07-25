const artworks: string[] = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworkDates: string[] = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function searchArtwork(artworkName: string): void {
  let resultText: string = `'${artworkName}' wurde von `;

  let artwork1: string | undefined = artworks.find((painting) =>
    painting.startsWith(artworkName)
  );
  let artwork2: string | undefined = artworkDates.find((painting) =>
    painting.startsWith(artworkName)
  );

  if (artwork1 && artwork2) {
    const artist: string = artwork1.split(" - ")[1];
    resultText += `${artist} im Jahre `;

    const year: string = artwork2.split(" - ")[1];
    resultText += `${year} gemalt.`;
    console.log(resultText);
  } else {
    console.log(`Artwork ${artworkName} not found`);
  }
}

searchArtwork("Die Mona Lisa");
searchArtwork("Die Sternennacht");
searchArtwork("Das letzte Abendmahl");
searchArtwork("Der Schrei");
