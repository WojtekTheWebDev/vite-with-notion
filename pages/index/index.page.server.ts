// /pages/star-wars/movie.page.server.js
// Environment: Node.js

import fetch from "node-fetch";
import { PageContext } from "../../renderer/types";
import { useNotion } from '../../composables'

export async function onBeforeRender(pageContext: PageContext) {
  const { client } = useNotion();

  const page = await client.pages.retrieve({ page_id: import.meta.env.VITE_HOME_PAGE_ID as string })
  const blocks = await client.blocks.children.list({ block_id: import.meta.env.VITE_HOME_PAGE_ID as string })
  const block = await client.blocks.retrieve({ block_id: import.meta.env.VITE_HOME_PAGE_ID as string })

  // Our render and hydrate functions we defined earlier pass `pageContext.pageProps` to
  // the root Vue component `Page`; this is where we define `pageProps`.
  const pageProps = { page, blocks, block };

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps,
    },
  };
}

// By default `pageContext.*` are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ["pageProps", "urlPathname"];
