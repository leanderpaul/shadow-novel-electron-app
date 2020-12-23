import genres from '../assets/data/genre.json';
import tags from '../assets/data/tags.json';

import { Chapter } from '../typescript/graphql.types';

interface Volume {
  chapters: {
    entries: Partial<Chapter>[];
  };
}

export { genres, tags };

export const getGenres = () => Object.keys(genres).map((key) => ({ key: key, value: genres[key as keyof typeof genres] }));

export const getGenreValues = () => Object.values(genres);

export const getTags = () => Object.keys(tags).map((key) => ({ key: key, value: tags[key as keyof typeof tags] }));

export const getTagValue = (key: string) => tags[key as keyof typeof tags];

export const getGenreValue = (key: string) => genres[key as keyof typeof genres];

export const getGenreKey = (value: string) => {
  for (let key in genres) if (genres[key as keyof typeof genres] === value) return key;
};

export const getFirstChapterInVolume = (volumes: Volume[]): Partial<Chapter> | null => {
  for (let index = 0; index < volumes.length; index++) {
    const volume = volumes[index];
    if (volume.chapters.entries.length > 0) return volume.chapters.entries[0];
  }
  return null;
};

export const getLastChapterInVolume = (volumes: Volume[]): Partial<Chapter> | null => {
  for (let index = volumes.length - 1; index >= 0; index--) {
    const volume = volumes[index];
    const chapterCount = volume.chapters.entries.length;
    if (chapterCount > 0) return volume.chapters.entries[chapterCount - 1];
  }
  return null;
};

export type Genre = keyof typeof genres;

export type Tags = keyof typeof tags;
