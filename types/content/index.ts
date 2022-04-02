import { Block } from "./block";

export * from "./block";

export interface Content {
  object: "list";
  results: Block[];
}
