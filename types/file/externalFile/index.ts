/**
 * External file object.
 * All external file objects have a type of "external".
 * An external file is any URL that isn't hosted by Notion.
 */
export interface ExternalFile {
  /**
   * Link to the externally hosted content.
   * Example value: `"https://website.domain/files/doc.txt"`
   */
  url: string;
}
