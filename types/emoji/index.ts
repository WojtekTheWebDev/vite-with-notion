/**
 * Possible values of emoji type.
 */
export enum EmojiTypes {
  /**
   * Emoji type
   */
  Emoji = "emoji",
}

/**
 * Emoji objects are used to set the page icon to an emoji.
 */
export interface Emoji {
  /**
   * Type of emoji.
   * Example value: `"emoji"`
   */
  type: EmojiTypes;
  /**
   * Emoji character.
   * Example value: `"🐶"`
   */
  emoji: string;
}
