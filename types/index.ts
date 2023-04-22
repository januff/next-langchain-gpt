export enum OpenAIModel {
  DAVINCI_TURBO = "gpt-3.5-turbo"
}

export type ImpromptuChunk = {
  pageContent: string;
  metadata: Metadata;
}

interface Metadata {
  title: string;
  source: string;
  chapter_display: string;
}
