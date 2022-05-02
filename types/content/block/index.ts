import { Heading, Paragraph, ToDo, Callout, Quote } from "~/types";

export * from "./heading";
export * from "./paragraph";
export * from "./toDo";
export * from "./callout";
export * from "./quote";

/**
 * Every block object has a key corresponding to the value of `type`. Under the key is an object with type-specific block information.
 */
export enum BlockTypes {
  Paragraph = "paragraph",
  Heading1 = "heading_1",
  Heading2 = "heading_2",
  Heading3 = "heading_3",
  BulletedListItem = "bulleted_list_item",
  NumberedListItem = "numbered_list_item",
  ToDo = "to_do",
  Toggle = "toggle",
  ChildPage = "child_page",
  ChildDatabase = "child_database",
  Embed = "embed",
  Image = "image",
  Video = "video",
  File = "file",
  Pdf = "pdf",
  Bookmark = "bookmark",
  Callout = "callout",
  Quote = "quote",
  Equation = "equation",
  Divider = "divider",
  TableOfContents = "table_of_contents",
  Column = "column",
  ColumnList = "column_list",
  LinkPreview = "link_preview",
  SyncedBlock = "synced_block",
  Template = "template",
  LinkToPage = "link_to_page",
  Table = "table",
  TableRow = "table_row",
  Unsupported = "unsupported",
}
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
  to_do?: ToDo;
  callout?: Callout;
  quote?: Quote;
}
