import MediaType from "../types/MediaType";
import Media from "./Media";

class Presentation extends Media {
  constructor(
    public mediaType: MediaType = "Presentation",
    public url: string
  ) {
    super(mediaType, url);
  }
}

export default Presentation;
