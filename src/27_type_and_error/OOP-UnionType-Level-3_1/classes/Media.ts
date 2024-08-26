import MediaType from "../types/MediaType";

class Media {
  constructor(public mediaType: MediaType, public url: string) {
    this.mediaType = mediaType;
    this.url = url;
  }
}

export default Media;
