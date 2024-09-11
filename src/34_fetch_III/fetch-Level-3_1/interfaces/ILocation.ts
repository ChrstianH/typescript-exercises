export interface ILocation {
  info: IInfo;
  results: ILocationResult[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ILocationResult {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
