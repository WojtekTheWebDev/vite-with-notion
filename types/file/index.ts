import { ExternalFile } from "./externalFile";
import { UploadedFile } from "./uploadedFile";

export * from "./externalFile";
export * from "./uploadedFile";

/**
 * File objects contain data about files uploaded to Notion as well as external files linked in Notion.
 */
export interface File {
  /**
   * External file.
   */
  external?: ExternalFile;
  /**
   * File uploaded to Notion.
   */
  file?: UploadedFile;
}
