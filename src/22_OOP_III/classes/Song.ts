class Song {
  private _title: string;
  protected _artist: string;
  public durationInSeconds: number = 0;

  constructor(title: string, artist: string) {
    this._title = title;
    this._artist = artist;
  }
}

export default Song;
