import { Client } from "@notionhq/client";

export const useNotion = () => {
  const client = new Client({
    auth: import.meta.env.VITE_NOTION_API_SECRET as string,
  });

  const getBlock = async (blockId: string) => {
    return await client.blocks.retrieve({ block_id: blockId });
  };

  const getBlockChildren = async (blockId: string) => {
    return await client.blocks.children.list({ block_id: blockId });
  };

  const getPage = async (pageId: string) => {
    const res = await Promise.all([getBlock(pageId), getBlockChildren(pageId)]);

    return {
      properties: res[0],
      content: res[1],
    };
  };

  return {
    client,
    getBlock,
    getBlockChildren,
    getPage
  };
};
