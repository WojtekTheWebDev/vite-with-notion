import { Client } from '@notionhq/client';

export const useNotion = () => {
  const client = new Client({ auth: import.meta.env.VITE_NOTION_API_SECRET as string });

  const getPage = async (pageId: string) => {
    return await client.pages.retrieve({ page_id: pageId })
  }

  const getPageContent = async (pageId: string) => {
    return await client.pages.retrieve({ page_id: pageId })
  }
  
  return {
    client,
    getPage,
    getPageContent
  }
}
