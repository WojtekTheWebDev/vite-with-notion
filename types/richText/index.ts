export type RichTextTypes = "text" | "mention" | "equation";

export interface RichTextLink {
  type: "url";
  url: string;
}

export interface RichText {
  type: RichTextTypes;
  text: {
    content: string;
    link?: RichTextLink;
  };
}
