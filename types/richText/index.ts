import { Annotations } from "../annotations";

export type RichTextTypes = "text" | "mention" | "equation";

export interface RichTextLink {
  type: "url";
  url: string;
}

export interface RichText {
  plain_text: string;
  annotations: Annotations;
  type: RichTextTypes;
  text?: {
    content: string;
    link?: RichTextLink;
  };
}
