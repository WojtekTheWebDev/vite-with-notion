import { Content } from '../index'

export interface Paragraph {
  rich_text: [
    {
      type: string;
      text: {
        content: string;
        link: string;
      };
    }
  ];
  color: string;
  children: Content[];
}
