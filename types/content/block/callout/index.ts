import { Block } from "..";
import { File } from "../../../file";
import { Color } from "../../../color";
import { RichText } from "../../../richText";
import { Emoji } from "../../../emoji";

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
  icon: File | Emoji,
  /**
   * Color of the block.
   */
  color: Color,
  /**
   * Any nested children blocks of the callout block.
   */
  children: Block[]
}