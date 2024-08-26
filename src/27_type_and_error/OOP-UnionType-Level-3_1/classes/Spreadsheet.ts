import MediaType from "../types/MediaType";
import Media from "./Media";

class Spreadsheet extends Media {
  constructor(public mediaType: MediaType = "Spreadsheet", public url: string) {
    super(mediaType, url);
  }
}

export default Spreadsheet;
