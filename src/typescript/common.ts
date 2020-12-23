export interface NovelParams {
  novelID: string;
}

export interface ChapterParams extends NovelParams {
  chapterID: string;
}

export interface ChapterInfo {
  cid: string;
  index: number;
  title: string;
  createdAt: string;
}
