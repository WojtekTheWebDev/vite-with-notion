import { RichText, Color } from "~/types";

/**
 * Quote block object.
 */
export interface Quote {
  /**
   * Rich text in the quote block.
   */
  rich_text: RichText[];
  /**
   * Color of the block.
   */
  color: Color;
}
