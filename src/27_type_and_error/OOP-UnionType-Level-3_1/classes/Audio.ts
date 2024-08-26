import MediaType from "../types/MediaType";
import Media from "./Media";

class Audio extends Media {
  constructor(
    public mediaType: MediaType = "Audio",
    public url: string,
    public duration: number
  ) {
    super(mediaType, url);
    this.duration = duration;
  }
}

export default Audio;
