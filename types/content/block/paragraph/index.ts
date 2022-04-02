import { Content, RichText, Color } from '../../..'

export interface Paragraph {
  rich_text: RichText[];
  color: Color;
  children: Content[];
}
