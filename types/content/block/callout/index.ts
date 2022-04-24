import { Block } from "..";
import { Color } from "../../../color";
import { RichText } from "../../../richText";

/**
 * Callout block object.
 */
export interface Callout {
  /**
   * Rich text in the heading block.
   */
  rich_text: RichText;
  /**
   * Callout icon.
   */
  icon: null,
  /**
   * Color of the block.
   */
  color: Color,
  /**
   * Any nested children blocks of the callout block.
   */
  children: Block[]
}