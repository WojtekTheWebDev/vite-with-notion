import { Content, RichText, Color } from "../../.."

export interface ToDo {
  "rich_text": RichText[],
  "checked": boolean,
  "color": Color,
  "children": Content[]
}