import { Heading } from "./heading";
import { Paragraph } from "./paragraph";

export * from "./heading";
export * from "./paragraph";

export type BlockTypes =
  | "paragraph"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "bulleted_list_item"
  | "numbered_list_item"
  | "to_do"
  | "toggle"
  | "child_page"
  | "child_database"
  | "embed"
  | "image"
  | "video"
  | "file"
  | "pdf"
  | "bookmark"
  | "callout"
  | "quote"
  | "equation"
  | "divider"
  | "table_of_contents"
  | "column"
  | "column_list"
  | "link_preview"
  | "synced_block"
  | "template"
  | "link_to_page"
  | "table"
  | "table_row"
  | "unsupported";

export interface Block {
  object: string;
  id: string;
  created_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  type: BlockTypes;
  archived: boolean;
  paragraph?: Paragraph;
  heading_1?: Heading;
  heading_2?: Heading;
  heading_3?: Heading;
}
