import Audio from "./classes/Audio";
import Document from "./classes/Document";
import Image from "./classes/Image";
import Media from "./classes/Media";
import Presentation from "./classes/Presentation";
import Spreadsheet from "./classes/Spreadsheet";
import Video from "./classes/Video";

const playMedia = (media: Media) => {
  switch (media.mediaType) {
    case "Image":
      console.log(`Opening image from ${media.url}.`);
      break;
    case "Video":
      const video = media as Video;
      console.log(
        `Playing video from ${media.url} with duration ${video.duration} minutes.`
      );
      break;
    case "Audio":
      const audio = media as Audio;
      console.log(
        `Playing audio from ${media.url} with duration ${audio.duration} minutes.`
      );
      break;
    case "Document":
      console.log(`Opening document from ${media.url}`);
      break;
    case "Presentation":
      console.log(`Opening presentation from ${media.url}`);
      break;
    case "Spreadsheet":
      console.log(`Opening spreadsheet from ${media.url}`);
      break;
  }
};

const imageOfmountEverest: Image = new Image(
  "Image",
  "/path/to/MountEverest.pic"
);
const videoAntz: Video = new Video("Video", "/path/to/Antz.mp4", 83);
const audioSong: Audio = new Audio("Audio", "/path/to/Song.mp3", 4);
const document: Document = new Document("Document", "/path/to/document.docx");
const presentation: Presentation = new Presentation(
  "Presentation",
  "/path/to/presentation.pptx"
);
const spreadsheet: Spreadsheet = new Spreadsheet(
  "Spreadsheet",
  "/path/to/spreadsheet.xlsx"
);

playMedia(imageOfmountEverest);
playMedia(videoAntz);
playMedia(audioSong);
playMedia(document);
playMedia(presentation);
playMedia(spreadsheet);
