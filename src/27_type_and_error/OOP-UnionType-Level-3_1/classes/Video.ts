import MediaType from "../types/MediaType";
import Media from "./Media";

class Video extends Media {
  constructor(
    public mediaType: MediaType = "Video",
    public url: string,
    public duration: number
  ) {
    super(mediaType, url);
    this.duration = duration;
  }
}

export default Video;
