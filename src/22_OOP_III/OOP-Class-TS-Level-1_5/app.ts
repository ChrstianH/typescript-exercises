import Song from "../classes/Song";
import SongWithUnknownArtist from "../classes/SongWithUnknownArtist";

const song1: Song = new Song("Plasticine", "Placebo");
song1.durationInSeconds = 206;

const song2: Song = new Song("Kind of Magic", "Queen");
song2.durationInSeconds = 270;

const song3: Song = new Song("Ladykiller", "Hocico");
song3.durationInSeconds = 372;

const song4: SongWithUnknownArtist = new SongWithUnknownArtist("Only You");
console.log(song4);
song4.setArtist("Flying Pickets");
song4.durationInSeconds = 197;
console.log(song4);
