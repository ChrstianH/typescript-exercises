export interface IEpisode {
  info: IInfo;
  results: IEpisodeResult[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IEpisodeResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
