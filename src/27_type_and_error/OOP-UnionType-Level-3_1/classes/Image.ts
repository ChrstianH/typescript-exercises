import MediaType from "../types/MediaType";
import Media from "./Media";

class Image extends Media {
  constructor(public mediaType: MediaType = "Image", public url: string) {
    super(mediaType, url);
  }
}

export default Image;
