export enum Lang {
  en = 'en',
  es = 'es',
  fr = 'fr',
}

export interface Content {
  [key: string]: {
    [Lang.en]: string;
    [Lang.es]: string;
    [Lang.fr]: string;
  };
}
