/**
 * Uploaded file object.
 * All files hosted by Notion have a type of "file".
 */
export interface UploadedFile {
  /**
   * Authenticated S3 URL to the file. The file URL will be valid for 1 hour but updated links can be requested if required.
   * Example value: `"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bc6c6e0-32b8-4d55-8c12-3ae931f43a01/brocolli.jpeg?..."`
   */
  url: string;
  /**
   * Date and time when this will expire. Formatted as an [ISO 8601 date time](https://en.wikipedia.org/wiki/ISO_8601) string.
   * Example value: `"2020-03-17T19:10:04.968Z"`
   */
  expiry_time: string;
}