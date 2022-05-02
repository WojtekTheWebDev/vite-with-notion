import { Block, File, Color, RichText, Emoji } from "~/types";

/**
 * Callout block object.
 */
export interface Callout {
  /**
   * Rich text in the callout block.
   */
  rich_text: RichText;
  /**
   * Callout icon.
   */
  icon: File | Emoji;
  /**
   * Color of the block.
   */
  color: Color;
  /**
   * Any nested children blocks of the callout block.
   */
  children: Block[];
}
