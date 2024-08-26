import MediaType from "../types/MediaType";
import Media from "./Media";

class Document extends Media {
  constructor(public mediaType: MediaType = "Document", public url: string) {
    super(mediaType, url);
  }
}

export default Document;
